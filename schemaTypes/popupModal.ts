import { defineField, defineType } from 'sanity'
import { portableTextConfig } from './portableTextConfig'

export const popupModal = defineType({
    name: 'popupModal',
    title: 'Popup Modal',
    type: 'object',
    fields: [
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'The text displayed on the button that opens the modal.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Modal Image',
            type: 'cloudinary.asset',
            options: { hotspot: true },
            description: 'The image displayed inside the modal.',
        }),
        defineField({
            name: 'text',
            title: 'Modal Rich Text Content',
            type: 'array',
            of: [portableTextConfig],
            description: 'Rich text body content shown inside the modal.',
            validation: (rule) => rule.required(),
        }),
    ],
})
