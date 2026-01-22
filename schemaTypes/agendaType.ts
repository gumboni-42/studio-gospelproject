import { defineField, defineType } from 'sanity'

export const agendaType = defineType({
    name: 'agenda',
    title: 'Agenda',
    type: 'document',
    fields: [
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
            name: 'active',
            title: 'Active / Visible',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
    },
})
