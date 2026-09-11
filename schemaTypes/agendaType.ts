import { portableTextConfig } from './portableTextConfig'
import { defineField, defineType } from 'sanity'

export const agendaType = defineType({
    name: 'agenda',
    title: 'Agenda',
    type: 'document',
    fields: [
        defineField({
            name: 'active',
            title: 'Sichtbar',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Name of Gig',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Zusatzbeschrieb / Untertitel',
            type: 'string',
            description: 'Z.B. «Konzerterlebnis mit 120 Chorstimmen» oder «Jubiläumsanlass zu 20 Gospelation Jahre»',
        }),
        defineField({
            name: 'doorsOpenTime',
            title: 'Türöffnung (Uhrzeit)',
            type: 'string',
            description: 'Z.B. «19:15» (leer lassen falls keine separate Türöffnung relevant ist, z.B. bei Gottesdiensten)',
        }),
        defineField({
            name: 'placeName',
            title: 'Place Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'placeAddress',
            title: 'Adresse der Location',
            type: 'string',
            description: 'Z.B. «Kirchbühlstrasse 40, 8712 Stäfa»',
        }),
        defineField({
            name: 'placeUrl',
            title: 'Google Maps Link',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'transportInfo',
            title: 'Hinweise Parkplatz & ÖV',
            type: 'text',
            rows: 3,
            description: 'Z.B. «Parkplätze beim Schulhaus. S7 bis Bahnhof Stäfa, anschliessend 5 Min. Fussweg.»',
        }),
        defineField({
            name: 'zvvCode',
            title: 'ZVV Fahrplan (Widget-Code oder Link)',
            type: 'text',
            rows: 4,
            description: 'Hier den von ZVV bereitgestellten Widget-Code einfügen (<script...> und <div id="zvv-connectionsearch-widget"...>) oder alternativ einen direkten Fahrplan-Link.',
        }),
        defineField({
            name: 'zvvUrl',
            title: 'ZVV / SBB Fahrplan Link (optional)',
            type: 'url',
            hidden: true,
        }),
        defineField({
            name: 'ticketInfo',
            title: 'Hinweis Eintritt / Kollekte / Preise',
            type: 'string',
            description: 'Z.B. «Freier Eintritt mit Kollekte» oder «Vorverkauf CHF 35.– / Abendkasse CHF 40.–»',
        }),
        defineField({
            name: 'ticketUrl',
            title: 'Ticket-Link (extern)',
            type: 'url',
            description: 'Optionaler externer Link zum Ticketverkauf (z.B. Eventfrog, Ticketino)',
        }),
        defineField({
            name: 'ticketButtonText',
            title: 'Ticket-Button Beschriftung',
            type: 'string',
            description: 'Optional, Standard ist «Tickets kaufen»',
            initialValue: 'Tickets kaufen',
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'array',
            of: [portableTextConfig],
        }),
        defineField({
            name: 'logoType',
            title: 'Logo Option',
            type: 'string',
            description: 'Choose a logo to display in the top right corner of the agenda item.',
            options: {
                list: [
                    { title: 'None', value: 'none' },
                    { title: 'Gospelation', value: 'gospelation' },
                    { title: 'Gospelproject', value: 'gospelproject' },
                ],
                layout: 'dropdown',
            },
            initialValue: 'gospelation',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
    },
})
