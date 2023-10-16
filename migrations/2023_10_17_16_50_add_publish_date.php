<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('blog_meta', function (Blueprint $table) {
            $table->dateTime('publish_date')->nullable(true);
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('blog_meta', function (Blueprint $table) {
            $table->dropColumn('publish_date');
        });
    },
];
