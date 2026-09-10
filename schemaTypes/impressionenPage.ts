import { portableTextConfig } from './portableTextConfig'
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
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinary.asset',
        }),
        defineField({
            name: 'showLogo',
            title: 'Show Logo',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle to show or hide the logo on the page.',
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
            of: [portableTextConfig],
            description: 'Text section displayed at the top of the page.',
        }),
        defineField({
            name: 'cdPromo',
            title: 'CD Promotion',
            type: 'object',
            description: 'Zwei quadratische Bilder nebeneinander zur CD-Bewerbung.',
            options: { collapsible: true, collapsed: false },
            fields: [
                defineField({
                    name: 'title',
                    title: 'Titel (optional)',
                    type: 'string',
                    description: 'Optionale Überschrift über den CDs (z.B. "Unsere CDs").',
                }),
                defineField({
                    name: 'cds',
                    title: 'CDs',
                    type: 'array',
                    description: 'Bis zu 2 CDs (quadratische Bilder nebeneinander)',
                    validation: (rule) => rule.max(2).warning('Maximal 2 CDs für dieses Layout empfohlen.'),
                    of: [
                        defineField({
                            name: 'cdItem',
                            title: 'CD',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'image',
                                    title: 'Cover-Bild (quadratisch)',
                                    type: 'cloudinary.asset',
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: 'title',
                                    title: 'Album-Titel / Name (optional)',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'link',
                                    title: 'Link (optional)',
                                    type: 'url',
                                    description: 'Optionaler Link bei Klick (z.B. zu Shop, Streaming oder Bestellung)',
                                    validation: (rule) => rule.uri({
                                        allowRelative: true,
                                        scheme: ['http', 'https', 'mailto'],
                                    }),
                                }),
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    media: 'image',
                                },
                                prepare({ title, media }) {
                                    return {
                                        title: title || 'CD',
                                        media,
                                    }
                                },
                            },
                        }),
                    ],
                }),
            ],
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
                            name: 'eventName',
                            title: 'Event Name',
                            type: 'string',
                            description: 'Optional event name to display below the year',
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
