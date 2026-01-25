import { defineField, defineType } from 'sanity'

export const homePage = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title', // For internal reference
            type: 'string',
            initialValue: 'Home Page',
            readOnly: true,
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'newsEnabled',
            title: 'Enable News Bar',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle to show or hide the news ticker.',
        }),
        defineField({
            name: 'newsItems',
            title: 'News Bar Items',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add short news updates to display in the ticker.',
        }),
        defineField({
            name: 'gospelationSection',
            title: 'Gospelation Section',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                }),
                defineField({
                    name: 'logo',
                    title: 'Logo',
                    type: 'cloudinary.asset',
                }),
                defineField({
                    name: 'text',
                    title: 'Description Text',
                    type: 'text',
                }),
            ]
        }),
        defineField({
            name: 'gospelprojectSection',
            title: 'Gospelproject Section',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                }),
                defineField({
                    name: 'logo',
                    title: 'Logo',
                    type: 'cloudinary.asset',
                }),
                defineField({
                    name: 'text',
                    title: 'Description Text',
                    type: 'text',
                }),
            ]
        })
    ],
})
