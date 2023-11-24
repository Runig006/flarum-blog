<?php

/*
 * This file is part of fof/sitemap.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE
 *  file that was distributed with this source code.
 *
 */

namespace V17Development\FlarumBlog\Console;

use Carbon\Carbon;
use Flarum\Discussion\Discussion;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Console\Command;
use Illuminate\Contracts\Filesystem\Factory as FileSistemFactory;
use Illuminate\View\Factory as ViewFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class CreateRssCommand extends Command
{
    protected $signature = 'runig006:blog:rss';
    protected $description = 'Generate the rss file';

    protected $rssDisk;
    protected $urlGenerator;
    protected $viewFactory;
    protected $settings;

    public function handle(UrlGenerator $urlGenerator, FileSistemFactory $filesystemFactory, ViewFactory $viewFactory, SettingsRepositoryInterface $settings)
    {
        $this->urlGenerator = $urlGenerator;
        $this->rssDisk = $filesystemFactory->disk('flarum-rss');
        $this->viewFactory = $viewFactory;
        $this->settings = $settings;

        $title = $this->settings->get('forum_title');
        $description = $this->settings->get('forum_description');
        $url = $this->urlGenerator->to('forum')->route('blog.overview');


        if ($this->rssDisk->exists('index.xml')) {
            $files = [];
            $parser = simplexml_load_string($this->rssDisk->get('index.xml'));
            foreach ($parser->category as $c) {
                $c = $this->xml2array($c);
                $files[$c['name']] = [
                    'name'   => $c['name'],
                    'url'    => $c['url'],
                    'upDate' => $c['upDate'] ?? Carbon::now()->toRfc822String(),
                ];
            }
        } else {
            $files = [
                'Completo' => [
                    'name'   => 'Completo',
                    'url'    => $this->urlGenerator->to('forum')->path('rss/full.xml'),
                    'upDate' => Carbon::now()->toRfc822String(),
                ]
            ];
        }

        $discussions = $this->getDiscussion();

        //full
        $xml = $this->viewFactory->make('fof-blog::rss', [
            'title' => $title,
            'description' => $description,
            'url' => $url,
            'discussions' => $discussions['all']
        ])->render();
        $this->rssDisk->put('full.xml', $xml);
        unset($discussions['all']);

        foreach ($discussions as $category => $d) {
            $xml = $this->viewFactory->make('fof-blog::rss', [
                'title' => $title,
                'description' => $description,
                'url' => $url,
                'discussions' => $d
            ])->render();
            $name = Str::slug($category) . ".xml";
            $files[$category] = [
                'name' => $category,
                'url' => $this->urlGenerator->to('forum')->path('rss/' . $name),
                'upDate' => Carbon::now()->toRfc822String(),
            ];
            $this->rssDisk->put($name, $xml);
        }
        $xml = $this->viewFactory->make('fof-blog::rss-index', ['files' => $files])->render();
        $this->rssDisk->put('index.xml', $xml);
    }

    private function getDiscussion()
    {
        $items = [
            'all' => [],
        ];
        $discussions = Discussion::whereHas('blogMeta', function (Builder $q) {
            $q->where('is_pending_review', 0);
        })->orderBy('created_at', 'desc')->with(['blogMeta', 'tags'])->limit(150)->get();
        foreach ($discussions as $d) {
            $url = $this->urlGenerator->to('forum')->route('blog.post', ['id' => $d->id . "-" . $d->slug]);
            $i = [
                'guid' => $url,
                'link' => $url,
                'title' =>  $d->title ?? $d->blogMeta->title,
                'category' => $d->tags->pluck('name')->implode(", "),
                'description' => $d->blogMeta->summary ?? " ",
                'pubDate' => $d->created_at->toRfc822String(),
                'comments' => $this->urlGenerator->to('forum')->route('discussion', ['id' => $d->id . "-" . $d->slug]),
            ];
            foreach ($d->tags as $t) {
                $t = $t->name;
                if (isset($items[$t]) == false) {
                    $items[$t] = [];
                }
                $items[$t][] = $i;
            }
            $items['all'][] = $i;
        }
        return $items;
    }

    private function xml2array($xmlObject, $out = array())
    {
        foreach ((array) $xmlObject as $index => $node)
            $out[$index] = (is_object($node)) ? $this->xml2array($node) : $node;

        return $out;
    }
}
