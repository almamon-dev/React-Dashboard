<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Root Categories
        $webDev = Category::create([
            'name' => 'Web Development',
            'slug' => 'web-development',
            'description' => 'Everything related to building websites.',
            'is_active' => true,
            'icon' => 'globe',
        ]);

        $design = Category::create([
            'name' => 'UI/UX Design',
            'slug' => 'ui-ux-design',
            'description' => 'User interface and user experience design.',
            'is_active' => true,
            'icon' => 'layout',
        ]);

        $marketing = Category::create([
            'name' => 'Digital Marketing',
            'slug' => 'digital-marketing',
            'description' => 'Online marketing strategies and tools.',
            'is_active' => true,
            'icon' => 'trending-up',
        ]);

        // Sub-categories for Web Development
        Category::create([
            'name' => 'Frontend',
            'slug' => 'frontend-dev',
            'description' => 'React, Vue, Tailwind CSS, etc.',
            'parent_id' => $webDev->id,
            'is_active' => true,
            'icon' => 'monitor',
        ]);

        Category::create([
            'name' => 'Backend',
            'slug' => 'backend-dev',
            'description' => 'Laravel, Node.js, Python, etc.',
            'parent_id' => $webDev->id,
            'is_active' => true,
            'icon' => 'server',
        ]);

        // Sub-categories for Design
        Category::create([
            'name' => 'Mobile App Design',
            'slug' => 'mobile-design',
            'description' => 'Designing for iOS and Android.',
            'parent_id' => $design->id,
            'is_active' => true,
            'icon' => 'smartphone',
        ]);

        // Sub-categories for Marketing
        Category::create([
            'name' => 'SEO',
            'slug' => 'seo-marketing',
            'description' => 'Search Engine Optimization.',
            'parent_id' => $marketing->id,
            'is_active' => true,
            'icon' => 'search',
        ]);

        Category::create([
            'name' => 'Social Media',
            'slug' => 'social-media',
            'description' => 'Facebook, Instagram, LinkedIn.',
            'parent_id' => $marketing->id,
            'is_active' => false, // Testing inactive
            'icon' => 'share-2',
        ]);
    }
}
