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
        defineField({
            name: 'vornameLabel',
            title: 'Vorname Label',
            type: 'string',
            initialValue: 'Vorname',
        }),
        defineField({
            name: 'nachnameLabel',
            title: 'Nachname Label',
            type: 'string',
            initialValue: 'Nachname',
        }),
        defineField({
            name: 'emailLabel',
            title: 'Email Label',
            type: 'string',
            initialValue: 'E-Mail-Adresse',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Jetzt abonnieren',
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Text',
            type: 'text',
            description: 'The privacy/consent notice at the bottom of the form.',
            initialValue: 'Durch das Abonnieren erklärst du dich damit einverstanden, Gospelupdates zu erhalten. Wir versprechen, dass wir deine Daten nicht an Dritte weitergeben und du dich jederzeit abmelden kannst.',
        }),
    ],
})
