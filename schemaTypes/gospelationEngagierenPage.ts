import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gospelationEngagierenPage',
    title: 'Gospelation Engagieren Page',

    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset'
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinary.asset'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'threeImageSection' }
            ],
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
                    type: 'string',
                }),
            ],
        }),
    ],
})
