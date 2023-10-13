<?php

namespace V17Development\FlarumBlog\Formatter;

use Exception;
use s9e\TextFormatter\Configurator;

class ScoreFormatter
{
    public function __invoke(Configurator $config)
    {

        $config->BBCodes->addCustom(
            '[review]{TEXT}[/review]',
            '<div class="review">{TEXT}</div>'
        );

        $config->BBCodes->addCustom(
            '[score color={COLOR?}]{NUMBER}[/score]',
            '<div class="scoring" style="background: conic-gradient(var(--bar-{COLOR}) {NUMBER}%, var(--bar-background) 0 100%);">
                <span>
                    {NUMBER}
                </span>
            </div>'
        );
        $config->tags['score']->filterChain->append([static::class, 'calculateColor']);
    }

    public static function calculateColor($tag)
    {
        $score = $tag->getAttribute('content'); //Dont have a fucking clue WHY is content
        switch (true) {
            case $score >= 80:
                $color = "green";
                break;
            case $score >= 50:
                $color = "yellow";
                break;
            default:
                $color = "red";
        }
        $tag->setAttribute('color', $color);
        return true;
    }
}
