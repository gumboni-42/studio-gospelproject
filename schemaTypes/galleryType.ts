import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Gallery',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
        defineField({
            name: 'years',
            title: 'Years',
            type: 'array',
            of: [
                defineField({
                    name: 'yearEntry',
                    title: 'Year Entry',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'year',
                            title: 'Year',
                            type: 'string', // using string for flexibility (e.g., "2023-2024") but could be number
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'images',
                            title: 'Images',
                            type: 'array',
                            of: [{ type: 'cloudinary.asset' }],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'year',
                            media: 'images.0',
                        },
                    },
                }),
            ],
        }),
    ],
})
