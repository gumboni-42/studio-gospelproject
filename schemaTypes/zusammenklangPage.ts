import { defineField, defineType } from 'sanity'

export const zusammenklangPage = defineType({
    name: 'zusammenklangPage',
    title: 'Zusammenklang Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
            initialValue: 'Zusammenklang',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'YouTube Video URL',
            type: 'url',
            description: 'YouTube video URL to embed as the hero section.',
            validation: (rule) => rule.uri({
                scheme: ['https'],
            }),
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main content (Sponsoring-Konzept, Kontakt section, etc.)',
        }),
        defineField({
            name: 'sponsoringKonzeptPdf',
            title: 'Sponsoring-Konzept PDF URL',
            type: 'url',
            description: 'Link to the Sponsoring-Konzept PDF document.',
        }),
        defineField({
            name: 'formIntroText',
            title: 'Form Intro Text',
            type: 'string',
            description: 'Intro text displayed above the sponsor/spender form.',
            initialValue: 'Gerne unterstützen wir das Gospeln 2026 und investieren als:',
        }),
    ],
})
