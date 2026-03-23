import { defineField, defineType } from 'sanity'

export const footerSettings = defineType({
    name: 'footerSettings',
    title: 'Footer Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'sponsors',
            title: 'Hauptsponsoren',
            type: 'array',
            description: 'Up to 2 main sponsors shown in the footer.',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'logo', title: 'Logo', type: 'cloudinary.asset' }),
                        defineField({ name: 'url', title: 'Website URL', type: 'url' }),
                    ],
                    preview: { select: { title: 'name' } },
                },
            ],
        }),
        defineField({
            name: 'mediaPartner',
            title: 'Medienpartner',
            type: 'object',
            fields: [
                defineField({ name: 'name', title: 'Name', type: 'string' }),
                defineField({ name: 'logo', title: 'Logo', type: 'cloudinary.asset' }),
                defineField({ name: 'url', title: 'Website URL', type: 'url' }),
            ],
        }),
        defineField({
            name: 'instagramUrl',
            title: 'Instagram URL',
            type: 'url',
            validation: (rule) => rule.uri({ scheme: ['https'] }),
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'YouTube URL',
            type: 'url',
            validation: (rule) => rule.uri({ scheme: ['https'] }),
        }),
        defineField({
            name: 'spotifyUrl',
            title: 'Spotify URL',
            type: 'url',
            validation: (rule) => rule.uri({ scheme: ['https'] }),
        }),
        defineField({
            name: 'appleMusicUrl',
            title: 'Apple Music URL',
            type: 'url',
            validation: (rule) => rule.uri({ scheme: ['https'] }),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Footer Settings',
            }
        },
    },
})
