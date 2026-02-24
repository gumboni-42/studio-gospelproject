import { defineField, defineType } from 'sanity'

export const callToAction = defineType({
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
            name: 'linkType',
            title: 'Link Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Internal Page', value: 'internal' },
                    { title: 'Custom URL', value: 'external' },
                ],
                layout: 'radio',
            },
            initialValue: 'internal',
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
            hidden: ({ parent }) => parent?.linkType !== 'internal',
        }),
        defineField({
            name: 'url',
            title: 'Custom URL',
            type: 'string',
            hidden: ({ parent }) => parent?.linkType !== 'external',
        }),
    ],
})
