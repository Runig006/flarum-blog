<?php

namespace V17Development\FlarumBlog\BlogMeta;

use Flarum\Foundation\AbstractValidator;

class BlogMetaValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        'featured_image' => ['string', 'nullable'],
        'summary' => ['string', 'nullable'],
        'position' => ['integer'],
        'is_sized' => ['boolean'],
        'is_pending_review' => ['boolean']
    ];
}