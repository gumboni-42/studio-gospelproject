import { defineField, defineType } from 'sanity'

import { portableTextConfig } from './portableTextConfig'

export const gospelvereinPage = defineType({
    name: 'gospelvereinPage',
    title: 'Gospelverein Page',
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
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinary.asset',
        }),
        defineField({
            name: 'showLogo',
            title: 'Show Logo',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle to show or hide the logo on the page.',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Text Body',
            type: 'array',
            of: [portableTextConfig],
            description: 'Main content with formatting support.',
        }),
        defineField({
            name: 'organigramm',
            title: 'Organigramm',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'mitgliedschaftText',
            title: 'Mitgliedschaft Text',
            type: 'array',
            of: [portableTextConfig],
            description: 'Text section for Mitgliedschaft.',
        }),
        defineField({
            name: 'gospelFriends',
            title: 'GospelFriends',
            type: 'cloudinary.asset',
            options: { hotspot: true },
        }),
        defineField({
            name: 'goennerText',
            title: 'Gönner Text',
            type: 'array',
            of: [portableTextConfig],
            description: 'Text section for Gönner.',
        }),
        defineField({
            name: 'callToAction',
            title: 'Call to Action',
            type: 'callToAction',
        }),
        defineField({
            name: 'twintImage',
            title: 'Twint QR Code Image',
            type: 'cloudinary.asset',
            description: 'QR Code for donations (Spende section).',
        }),
        defineField({
            name: 'twintText',
            title: 'Twint Text',
            type: 'array',
            of: [portableTextConfig],
            description: 'Text section for Twint.',
        }),
        defineField({
            name: 'statutenFile',
            title: 'Statuten PDF',
            type: 'file',
            options: {
                accept: '.pdf'
            },
            description: 'Upload the Statuten PDF here.',
        }),
    ],
})
