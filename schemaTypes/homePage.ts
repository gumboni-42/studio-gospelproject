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
            of: [
                defineField({
                    name: 'newsItem',
                    title: 'News Item',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'internalLink',
                            title: 'Link (optional)',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Home', value: '/' },
                                    { title: 'Agenda', value: '/agenda' },
                                    { title: 'Gospelproject', value: '/gospelproject' },
                                    { title: 'Gospelproject - Mitmachen', value: '/gospelproject/mitmachen' },
                                    { title: 'Gospelproject - Anmeldung', value: '/gospelproject/anmeldung' },
                                    { title: 'Gospelproject - Termine', value: '/gospelproject/termine' },
                                    { title: 'Gospelation', value: '/gospelation' },
                                    { title: 'Team', value: '/gospelproject/team' },
                                    { title: 'Kontakt', value: '/kontakt' },
                                    { title: 'Member', value: '/gospelproject/member' },
                                ],
                                layout: 'dropdown',
                            },
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'text',
                            subtitle: 'internalLink',
                        }
                    }
                })
            ],
            description: 'Add short news updates and optional links to display in the ticker.',
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
                defineField({
                    name: 'internalLink',
                    title: 'Internal Page URL',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Home', value: '/' },
                            { title: 'Agenda', value: '/agenda' },
                            { title: 'Gospelproject', value: '/gospelproject' },
                            { title: 'Gospelproject - Mitmachen', value: '/gospelproject/mitmachen' },
                            { title: 'Gospelproject - Anmeldung', value: '/gospelproject/anmeldung' },
                            { title: 'Gospelproject - Termine', value: '/gospelproject/termine' },
                            { title: 'Gospelation', value: '/gospelation' },
                            { title: 'Team', value: '/gospelproject/team' },
                            { title: 'Kontakt', value: '/kontakt' },
                            { title: 'Member', value: '/gospelproject/member' },
                        ],
                        layout: 'dropdown',
                    },
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
                defineField({
                    name: 'internalLink',
                    title: 'Internal Page URL',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Home', value: '/' },
                            { title: 'Agenda', value: '/agenda' },
                            { title: 'Gospelproject', value: '/gospelproject' },
                            { title: 'Gospelproject - Mitmachen', value: '/gospelproject/mitmachen' },
                            { title: 'Gospelproject - Anmeldung', value: '/gospelproject/anmeldung' },
                            { title: 'Gospelproject - Termine', value: '/gospelproject/termine' },
                            { title: 'Gospelation', value: '/gospelation' },
                            { title: 'Team', value: '/gospelproject/team' },
                            { title: 'Kontakt', value: '/kontakt' },
                            { title: 'Member', value: '/gospelproject/member' },
                        ],
                        layout: 'dropdown',
                    },
                })
            ]
        })
    ],
})
