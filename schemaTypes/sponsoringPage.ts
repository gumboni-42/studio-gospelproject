import { defineField, defineType } from 'sanity'

export const sponsoringPage = defineType({
    name: 'sponsoringPage',
    title: 'Sponsoring Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
            initialValue: 'Sponsoring',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main content explaining the sponsoring opportunities.',
        }),
        defineField({
            name: 'qrCodeImage',
            title: 'Twint QR Code',
            type: 'cloudinary.asset',
            description: 'Image of the Twint QR Code for donations.',
        }),
        defineField({
            name: 'pastMainSponsors',
            title: 'Past Main Sponsors',
            type: 'array',
            description: 'Logos and links for past main sponsors.',
            of: [
                defineField({
                    name: 'sponsor',
                    title: 'Sponsor',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Sponsor Name',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'logo',
                            title: 'Logo',
                            type: 'cloudinary.asset',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            title: 'Website URL',
                            type: 'url',
                            validation: (rule) => rule.uri({
                                scheme: ['http', 'https']
                            }),
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'mediaPartner',
            title: 'Media Partner',
            type: 'object',
            description: 'Logo and link for the media partner.',
            fields: [
                defineField({
                    name: 'name',
                    title: 'Partner Name',
                    type: 'string',
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'logo',
                    title: 'Logo',
                    type: 'cloudinary.asset',
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: 'url',
                    title: 'Website URL',
                    type: 'url',
                    validation: (rule) => rule.uri({
                        scheme: ['http', 'https']
                    }),
                }),
            ],
        }),
    ],
})
