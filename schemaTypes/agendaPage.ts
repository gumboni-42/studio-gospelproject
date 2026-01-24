import { defineField, defineType } from 'sanity'

export const agendaPage = defineType({
    name: 'agendaPage',
    title: 'Agenda Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Agenda',
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
    ],
})
