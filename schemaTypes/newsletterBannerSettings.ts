import { defineField, defineType } from 'sanity'

export const newsletterBannerSettings = defineType({
    name: 'newsletterBannerSettings',
    title: 'Newsletter Banner Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'text',
            title: 'Banner Text',
            type: 'string',
            description: 'The text that will be displayed on the banner.',
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Newsletter Banner Settings',
            }
        },
    },
})
