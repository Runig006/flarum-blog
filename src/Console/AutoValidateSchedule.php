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

use Illuminate\Console\Scheduling\Event;

class AutoValidateSchedule
{
    public function __invoke(Event $event)
    {
        $event->onOneServer()
            ->withoutOverlapping()
            ->everyFiveMinutes();
    }
}
