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
                                { type: 'gospelprojectMitmachenPage' },
                                { type: 'gospelprojectAnmeldungPage' },
                                { type: 'gospelprojectTerminePage' },
                                { type: 'teamPage' },
                                { type: 'gospelprojectMemberPage' },
                                { type: 'gospelationPage' },
                                { type: 'gospelationEngagierenPage' },
                                { type: 'agendaPage' },
                                { type: 'impressionenPage' },
                                { type: 'kontaktPage' },
                                { type: 'sponsoringPage' },
                                { type: 'gospelprojectBedingungenPage' },
                                { type: 'gospelvereinPage' },
                            ],
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'title',
                            title: 'Custom Navigation Title',
                            type: 'string',
                            description: 'Optional: Override the default page title in the navigation bar.'
                        }),
                        defineField({
                            name: 'children',
                            title: 'Sub-Navigation Items',
                            type: 'array',
                            description: 'Add nested pages under this menu item. You can reorder them and provide custom titles.',
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
                                                { type: 'gospelprojectMitmachenPage' },
                                                { type: 'gospelprojectAnmeldungPage' },
                                                { type: 'gospelprojectTerminePage' },
                                                { type: 'teamPage' },
                                                { type: 'gospelprojectMemberPage' },
                                                { type: 'gospelationPage' },
                                                { type: 'gospelationEngagierenPage' },
                                                { type: 'agendaPage' },
                                                { type: 'impressionenPage' },
                                                { type: 'kontaktPage' },
                                                { type: 'sponsoringPage' },
                                                { type: 'gospelprojectBedingungenPage' },
                                                { type: 'gospelvereinPage' },
                                            ],
                                            validation: Rule => Rule.required()
                                        }),
                                        defineField({
                                            name: 'title',
                                            title: 'Custom Navigation Title',
                                            type: 'string',
                                            description: 'Optional: Override the default page title in the dropdown menu.'
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
                                                title: title || pageTitle || pageId || 'Unnamed Sub-Page',
                                                subtitle: title ? 'Custom Title' : 'Default Title'
                                            }
                                        }
                                    }
                                }
                            ]
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
    preview: {
        prepare() {
            return {
                title: 'Navigation Settings'
            }
        }
    }
})
