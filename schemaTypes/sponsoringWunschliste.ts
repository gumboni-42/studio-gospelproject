import { portableTextConfig } from './portableTextConfig'
import { defineField, defineType } from 'sanity'

export const sponsoringWunschliste = defineType({
    name: 'sponsoringWunschliste',
    title: 'Sponsoring Wunschliste',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
            initialValue: 'Wunschliste',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            initialValue: 'Unterstütze uns gezielt – wähle aus, was du finanzieren möchtest.',
        }),
        defineField({
            name: 'introText',
            title: 'Intro Text',
            type: 'array',
            of: [portableTextConfig],
            description: 'Optional introductory text shown above the wishlist.',
        }),
        defineField({
            name: 'categories',
            title: 'Kategorien',
            type: 'array',
            description: 'Wishlist items grouped by category.',
            of: [
                defineField({
                    name: 'category',
                    title: 'Kategorie',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Category Title',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Category Description',
                            type: 'text',
                            rows: 2,
                        }),
                        defineField({
                            name: 'emoji',
                            title: 'Emoji / Icon',
                            type: 'string',
                            description: 'Optional emoji shown as the category icon (e.g. 🎵)',
                        }),
                        defineField({
                            name: 'items',
                            title: 'Items',
                            type: 'array',
                            of: [
                                defineField({
                                    name: 'item',
                                    title: 'Item',
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'title',
                                            title: 'Item Title',
                                            type: 'string',
                                            validation: (rule) => rule.required(),
                                        }),
                                        defineField({
                                            name: 'description',
                                            title: 'Description',
                                            type: 'text',
                                            rows: 3,
                                        }),
                                        defineField({
                                            name: 'unitAmount',
                                            title: 'Spendenbetrag pro Anteil (CHF)',
                                            type: 'string',
                                            description: 'e.g. "200.-" or "100.-"',
                                        }),
                                        defineField({
                                            name: 'totalUnits',
                                            title: 'Anzahl Anteile',
                                            type: 'number',
                                            description: 'Total number of donation units available for this item.',
                                        }),
                                        defineField({
                                            name: 'claimedUnits',
                                            title: 'Bereits beansprucht',
                                            type: 'number',
                                            initialValue: 0,
                                            description: 'Automatically incremented when a sponsor checks out. You can reset it manually.',
                                            validation: (rule) => rule.min(0),
                                        }),
                                        defineField({
                                            name: 'isAvailable',
                                            title: 'Verfügbar (sichtbar auf der Website)',
                                            type: 'boolean',
                                            initialValue: true,
                                        }),
                                    ],
                                    preview: {
                                        select: {
                                            title: 'title',
                                            subtitle: 'unitAmount',
                                            available: 'isAvailable',
                                        },
                                        prepare({ title, subtitle, available }: { title: string; subtitle?: string; available?: boolean }) {
                                            return {
                                                title: `${available ? '✅' : '🔒'} ${title}`,
                                                subtitle: subtitle ? `CHF ${subtitle}` : '',
                                            }
                                        },
                                    },
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            emoji: 'emoji',
                        },
                        prepare({ title, emoji }: { title: string; emoji?: string }) {
                            return {
                                title: `${emoji ?? '📋'} ${title}`,
                            }
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: 'successTitle',
            title: 'Success Message Title',
            type: 'string',
            initialValue: 'Vielen Dank für dein Interesse!',
        }),
        defineField({
            name: 'successText',
            title: 'Success Message Text',
            type: 'text',
            initialValue: 'Wir haben deine Auswahl erhalten und melden uns in Kürze bei dir. Gemeinsam bringen wir das Gospelproject zum Klingen!',
        }),
    ],
})
