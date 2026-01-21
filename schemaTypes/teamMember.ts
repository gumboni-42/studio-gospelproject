import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'section',
            title: 'Section',
            type: 'string',
            options: {
                list: [
                    { title: 'Team', value: 'team' },
                    { title: 'Soloists', value: 'soloists' },
                    { title: 'Band', value: 'band' },
                ],
                layout: 'radio'
            },
            initialValue: 'team',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'bio',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})