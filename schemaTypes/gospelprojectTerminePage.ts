import { defineField, defineType } from 'sanity'

export const gospelprojectTerminePage = defineType({
    name: 'gospelprojectTerminePage',
    title: 'Gospelproject Termine Page',
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
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main content with formatting support.',
        }),
        defineField({
            name: 'htmlTable',
            title: 'HTML Dates Table',
            type: 'text',
            description: 'Paste your HTML table for dates here. This will be rendered directly on the page below the main content.',
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
