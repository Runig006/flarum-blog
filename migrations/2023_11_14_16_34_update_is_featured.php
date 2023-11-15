<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('blog_meta', function (Blueprint $table) {
            $table->unsignedInteger('is_featured')->change();
            $table->renameColumn('is_featured', 'position');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('blog_meta', function (Blueprint $table) {
            $table->renameColumn('position', 'is_featured');
            $table->boolean('is_featured')->change();
        });
    },
];
