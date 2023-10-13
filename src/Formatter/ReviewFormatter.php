<?php

namespace V17Development\FlarumBlog\Formatter;

use s9e\TextFormatter\Parser;
use s9e\TextFormatter\Renderer;
use s9e\TextFormatter\Utils;

class ReviewFormatter
{
    public function __invoke(Parser $Parser, $context, $xml)
    {
        if (strpos($xml, 'review') === false) {
            return $xml;
        }

        $xml = preg_replace_callback('/\[review](.*)\[\/review]/', function ($matches) {
            return $this->createhtmlForReview($matches[1]);
        }, $xml);

        return $xml;
    }

    public function createhtmlForReview($score)
    {
        switch (true) {
            case $score > 80:
                $color = "green";
                break;
            case $score > 50:
                $color = "yellow";
                break;
            default:
                $color = "red";
        }
        $style = "background: conic-gradient($color $score%, transparent 0 100%);color:$color";

        return "<div class='scoring' style='$style'><span>$score</span></div>";
    }
}
