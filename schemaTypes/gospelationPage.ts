import { defineField, defineType } from 'sanity'

export const gospelationPage = defineType({
    name: 'gospelationPage',
    title: 'Gospelation Page',
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
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
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
        defineField({
            name: 'callToAction',
            title: 'Call to Action',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Button Text',
                    type: 'string',
                }),
                defineField({
                    name: 'url',
                    title: 'Button URL',
                    type: 'url',
                    validation: (rule) => rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                }),
            ],
        }),
    ],
})
