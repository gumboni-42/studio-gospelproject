import { defineField, defineType } from 'sanity'

export const navigationSettings = defineType({
    name: 'navigationSettings',
    title: 'Navigation Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'mainNav',
            title: 'Hauptnavigation Reihenfolge',
            type: 'array',
            description: 'Add pages here and drag them into the order you want them to appear in the main navigation. You can also provide a custom title for the navigation item. Any pages not included here will appear at the end.',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'page',
                            title: 'Page Reference',
                            type: 'reference',
                            to: [
                                { type: 'gospelprojectPage' },
                                { type: 'gospelationPage' },
                                { type: 'agendaPage' },
                                { type: 'gallery' },
                                { type: 'kontaktPage' },
                            ],
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'title',
                            title: 'Custom Navigation Title',
                            type: 'string',
                            description: 'Optional: Override the default page title in the navigation bar.'
                        })
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            pageTitle: 'page.title',
                            pageId: 'page._id'
                        },
                        prepare({ title, pageTitle, pageId }) {
                            return {
                                title: title || pageTitle || pageId || 'Unnamed Page',
                                subtitle: title ? 'Custom Title' : 'Default Title'
                            }
                        }
                    }
                }
            ],
        }),
    ],
})
