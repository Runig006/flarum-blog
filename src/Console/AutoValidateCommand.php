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
use Flarum\Discussion\Event\Started;
use Illuminate\Console\Command;
use Illuminate\Contracts\Events\Dispatcher;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;

class AutoValidateCommand extends Command
{
    protected $signature = 'runig006:blog:publish';
    protected $description = 'Check for any news that need publish';

    public function handle(Dispatcher $dispatcher)
    {
        $blogs = BlogMeta::with('discussion')->where('is_pending_review', 1)->whereNotNull('publish_date')->where('publish_date', '<=', Carbon::now())->get();
        foreach ($blogs as $b) {
            $discussion = $b->discussion;
            if ($discussion->comment_count < 2) {
                $discussion->timestamps = false;
                $discussion->created_at = $b->is_pending_review;
                $discussion->save();

                $firstPost = $discussion->firstPost;
                $firstPost->timestamps = false;
                $firstPost->created_at = $b->is_pending_review;
                $firstPost->save();
            }

            $b->is_pending_review = false;
            $b->publish_date = null;
            $b->save();
            $dispatcher->dispatch(new Started($b->discussion, null));
        }
    }
}
