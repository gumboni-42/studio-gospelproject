import { defineField, defineType } from 'sanity'

export const impressionenPage = defineType({
    name: 'impressionenPage',
    title: 'Impressionen Page',
    type: 'document',
    fields: [
        defineField({
            name: 'visible',
            title: 'Visible on website',
            type: 'boolean',
            initialValue: true,
            description: 'Uncheck to hide this page from visitors and the navigation.',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Impressionen',
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
        defineField({
            name: 'videos',
            title: 'YouTube Videos',
            type: 'array',
            of: [
                defineField({
                    name: 'videoEntry',
                    title: 'Video',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'isPublic',
                            title: 'Public',
                            type: 'boolean',
                            initialValue: true,
                            description: 'Uncheck to hide this video from the website.',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Video Title',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'youtubeUrl',
                            title: 'YouTube URL',
                            type: 'url',
                            validation: (rule) => rule.required().uri({
                                scheme: ['http', 'https']
                            }),
                        }),
                        defineField({
                            name: 'thumbnail',
                            title: 'Thumbnail Image (Cloudinary)',
                            type: 'cloudinary.asset',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'youtubeUrl',
                        },
                    },
                }),
            ],
        }),
    ],
})
