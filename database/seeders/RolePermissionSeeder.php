<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Permissions
        $permissions = [
            'users.view',
            'users.create',
            'users.edit',
            'users.delete',
            'categories.view',
            'categories.create',
            'categories.edit',
            'categories.delete',
            'blogs.view',
            'blogs.create',
            'blogs.edit',
            'blogs.delete',
        ];

        foreach ($permissions as $permission) {
            Permission::findOrCreate($permission);
        }

        // Create Roles and Assign Permissions
        $superAdmin = Role::findOrCreate('Super Admin');
        $superAdmin->givePermissionTo(Permission::all());

        $admin = Role::findOrCreate('Admin');
        $admin->givePermissionTo([
            'users.view',
            'categories.view',
            'categories.create',
            'categories.edit',
            'blogs.view',
            'blogs.create',
            'blogs.edit',
        ]);

        $editor = Role::findOrCreate('Editor');
        $editor->givePermissionTo([
            'blogs.view',
            'blogs.create',
            'blogs.edit',
        ]);

        $user = Role::findOrCreate('User');
    }
}
