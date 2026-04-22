import { defineField, defineType } from 'sanity'

export const gospelprojectMitmachenPage = defineType({
    name: 'gospelprojectMitmachenPage',
    title: 'Gospelproject Mitmachen Page',
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
            name: 'projectStatus',
            title: 'Is a project currently planned?',
            type: 'boolean',
            initialValue: true,
            description: 'Turn this OFF to display the "inactive" content below, explaining that no project is planned.',
        }),
        defineField({
            name: 'body',
            title: 'Active Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main content explaining how to take part.',
            hidden: ({ document }) => document?.projectStatus === false,
        }),
        defineField({
            name: 'inactiveBody',
            title: 'Inactive Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Content explaining that no project is currently planned.',
            hidden: ({ document }) => document?.projectStatus !== false,
        }),
        defineField({
            name: 'callToAction',
            title: 'Call to Action',
            type: 'callToAction',
            hidden: ({ document }) => document?.projectStatus === false,
        }),
    ],
})
