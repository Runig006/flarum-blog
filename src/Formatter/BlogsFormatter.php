<?php

namespace V17Development\FlarumBlog\Formatter;

use Exception;
use s9e\TextFormatter\Configurator;

class BlogsFormatter
{
    public function __invoke(Configurator $config)
    {
        $config->BBCodes->addCustom(
            '[review]{TEXT}[/review]',
            '<div class="review">{TEXT}</div>'
        );
        
        $config->BBCodes->addCustom(
            '[carousel]{TEXT}[/carousel]',
            '<div class="carousel">
                <button class="Button carousel-button hasIcon">
                    <i aria-hidden="true" class="icon fas fa-arrow-left Button-icon"></i>
                    <span class="Button-label"> </span>
                </button>
                <div class="carousel-list">{TEXT}</div>
                <button class="Button carousel-button hasIcon" type="button">
                    <i aria-hidden="true" class="icon fas fa-arrow-right Button-icon"></i>
                    <span class="Button-label"> </span>
                </button>
            </div>'
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
