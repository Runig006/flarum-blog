<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'blog.canApproveOwnPost' => Group::MODERATOR_ID,
]);