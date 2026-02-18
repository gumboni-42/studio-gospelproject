import { defineField, defineType } from 'sanity'

export const simplePage = defineType({
    name: 'simplePage',
    title: 'Simple Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinary.asset',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Text Body',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main content with formatting support.',
        }),
    ],
})  