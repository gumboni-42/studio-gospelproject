import { defineField, defineType } from 'sanity'

export const threeImageSection = defineType({
    name: 'threeImageSection',
    title: 'Three Image Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'cloudinary.asset' }],
            validation: (rule) => rule.max(3).warning('It is recommended to have exactly 3 images for the layout.'),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Three Image Section',
                subtitle: '3 Images Horizontal',
                media: media,
            }
        },
    },
})
