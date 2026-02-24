import { defineField, defineType } from 'sanity'

export const agendaType = defineType({
    name: 'agenda',
    title: 'Agenda',
    type: 'document',
    fields: [
        defineField({
            name: 'active',
            title: 'Sichtbar',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Name of Gig',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'placeName',
            title: 'Place Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'placeUrl',
            title: 'Google Maps Link',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'logoType',
            title: 'Logo Option',
            type: 'string',
            description: 'Choose a logo to display in the top right corner of the agenda item.',
            options: {
                list: [
                    { title: 'None', value: 'none' },
                    { title: 'Gospelation', value: 'gospelation' },
                    { title: 'Gospelproject', value: 'gospelproject' },
                ],
                layout: 'dropdown',
            },
            initialValue: 'gospelation',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
    },
})
