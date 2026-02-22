import { defineField, defineType } from 'sanity'

export const kontaktPage = defineType({
    name: 'kontaktPage',
    title: 'Kontakt Page',
    type: 'document',
    fields: [
        defineField({
            name: 'visible',
            title: 'Visible on website',
            type: 'boolean',
            initialValue: true,
            description: 'Uncheck to hide this page from visitors and the navigation.',
        }),
    ],
})
