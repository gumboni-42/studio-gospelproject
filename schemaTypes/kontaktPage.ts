import { portableTextConfig } from './portableTextConfig'
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
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Kontakt',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'contactText',
            title: 'Contact Text',
            type: 'array',
            of: [portableTextConfig],
            description: 'Text shown below the contact form.',
        }),
    ],
})
