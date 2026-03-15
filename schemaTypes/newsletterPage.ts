import { defineField, defineType } from 'sanity'

export const newsletterPage = defineType({
    name: 'newsletterPage',
    title: 'Newsletter Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Internal Title',
            type: 'string',
            initialValue: 'Newsletter Page',
            readOnly: true,
        }),
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            description: 'The title displayed at the top of the newsletter page.',
            initialValue: 'Newsletter',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'The introductory text for the newsletter signup.',
            initialValue: 'Bleib auf dem Laufenden – abonniere unseren Newsletter!',
        }),
        defineField({
            name: 'thankYouMessage',
            title: 'Thank You Message',
            type: 'text',
            description: 'The message shown after a successful signup.',
            initialValue: 'Vielen Dank für deine Anmeldung! Wir haben dir eine Bestätigungs-E-Mail gesendet.',
        }),
    ],
})
