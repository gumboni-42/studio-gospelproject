import { portableTextConfig } from './portableTextConfig'
import { defineArrayMember, defineField, defineType } from 'sanity'

const nameField = defineField({
    name: 'name',
    title: 'Sponsor Name',
    type: 'string',
    validation: (rule) => rule.required(),
})

const logoField = defineField({
    name: 'logo',
    title: 'Logo',
    type: 'cloudinary.asset',
    validation: (rule) => rule.required(),
})

const urlField = defineField({
    name: 'url',
    title: 'Website URL',
    type: 'url',
    validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
})

export const sponsorenPage = defineType({
    name: 'sponsorenPage',
    title: 'Sponsoren Page',
    type: 'document',
    groups: [
        { name: 'page', title: 'Seite', default: true },
        { name: 'main', title: 'Hauptsponsoren' },
        { name: 'gold', title: 'Goldsponsoren' },
        { name: 'other', title: 'Übrige Sponsoren' },
    ],
    fields: [
        defineField({
            name: 'visible',
            title: 'Visible on website',
            type: 'boolean',
            initialValue: true,
            description: 'Uncheck to hide this page from visitors and the navigation.',
            group: 'page',
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
            initialValue: 'Sponsoren',
            group: 'page',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            group: 'page',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
            group: 'page',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'cloudinary.asset',
            group: 'page',
        }),
        defineField({
            name: 'showLogo',
            title: 'Show Logo',
            type: 'boolean',
            initialValue: false,
            description: 'Toggle to show or hide the logo on the page.',
            group: 'page',
        }),
        defineField({
            name: 'body',
            title: 'Intro Text',
            type: 'array',
            of: [portableTextConfig],
            description: 'Optional introduction shown above the sponsor sections.',
            group: 'page',
        }),

        // Section 1: Hauptsponsoren
        defineField({
            name: 'mainSponsorsTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Hauptsponsoren',
            group: 'main',
        }),
        defineField({
            name: 'mainSponsors',
            title: 'Hauptsponsoren',
            type: 'array',
            description: 'Displayed large, with logo linked to the website.',
            group: 'main',
            of: [
                defineArrayMember({
                    name: 'mainSponsor',
                    title: 'Hauptsponsor',
                    type: 'object',
                    fields: [nameField, logoField, urlField],
                    preview: { select: { title: 'name', subtitle: 'url' } },
                }),
            ],
        }),

        // Section 2: Goldsponsoren
        defineField({
            name: 'goldSponsorsTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Goldsponsoren',
            group: 'gold',
        }),
        defineField({
            name: 'goldSponsors',
            title: 'Goldsponsoren',
            type: 'array',
            description: 'Displayed in a grid of three logos with company name.',
            group: 'gold',
            of: [
                defineArrayMember({
                    name: 'goldSponsor',
                    title: 'Goldsponsor',
                    type: 'object',
                    fields: [nameField, logoField, urlField],
                    preview: { select: { title: 'name', subtitle: 'url' } },
                }),
            ],
        }),

        // Section 3: Übrige Sponsoren
        defineField({
            name: 'otherSponsorsTitle',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Übrige Sponsoren',
            group: 'other',
        }),
        defineField({
            name: 'otherSponsors',
            title: 'Übrige Sponsoren',
            type: 'array',
            description: 'Listed with name and website URL.',
            group: 'other',
            of: [
                defineArrayMember({
                    name: 'otherSponsor',
                    title: 'Sponsor',
                    type: 'object',
                    fields: [nameField, urlField],
                    preview: { select: { title: 'name', subtitle: 'url' } },
                }),
            ],
        }),
    ],
})

