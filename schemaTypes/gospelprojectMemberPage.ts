import { portableTextConfig } from './portableTextConfig'
import { defineField, defineType } from 'sanity'

export const gospelprojectMemberPage = defineType({
    name: 'gospelprojectMemberPage',
    title: 'Gospelproject Member Page',
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
            name: 'body',
            title: 'Content',
            type: 'array',
            of: [portableTextConfig],
            description: 'Main content with formatting support.',
        }),
        defineField({
            name: 'downloadsSectionTitle',
            title: 'Downloads Section Title',
            type: 'string',
            initialValue: 'Downloads & Dateien',
            description: 'Überschrift für den Download-Bereich (z.B. "Downloads für Mitglieder" oder "Dateien & Notenmaterial").',
        }),
        defineField({
            name: 'downloadsSectionDescription',
            title: 'Downloads Section Description',
            type: 'text',
            rows: 2,
            description: 'Optionale Beschreibung oder Hinweistext über der Download-Tabelle.',
        }),
        defineField({
            name: 'downloads',
            title: 'Downloads für Mitglieder',
            type: 'array',
            of: [
                defineField({
                    name: 'downloadItem',
                    title: 'Download Datei',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Name / Titel',
                            type: 'string',
                            validation: (rule) => rule.required(),
                            description: 'Bezeichnung des Downloads (z.B. "Chornoten Gesamtpaket 2026", "Audioaufnahmen Sopran", "Probenplan PDF").',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Beschreibung / Notiz',
                            type: 'string',
                            description: 'Optionale kurze Notiz (z.B. "Stand Mai 2026, inkl. aller Stimmauszüge").',
                        }),
                        defineField({
                            name: 'isNew',
                            title: 'Neu / Aktualisiert (Badge)',
                            type: 'boolean',
                            initialValue: true,
                            description: 'Aktivieren, um diesen Download mit einem "NEU" Badge hervorzuheben.',
                        }),
                        defineField({
                            name: 'file',
                            title: 'Datei (Direkt-Upload)',
                            type: 'file',
                            description: 'Direkt in Sanity hochladen (unterstützt ZIP, PDF, Bilder, Audio etc. bis zu 1GB). Dateigrösse, Dateiname und Upload-Datum werden automatisch ausgelesen.',
                        }),
                        defineField({
                            name: 'externalUrl',
                            title: 'Externer Download-Link (z.B. Google Drive)',
                            type: 'url',
                            description: 'Alternative zu Direkt-Upload: Link zu Google Drive, Dropbox oder anderem externen Speicher.',
                        }),
                        defineField({
                            name: 'customFilename',
                            title: 'Manueller Dateiname',
                            type: 'string',
                            description: 'Optional: Dateiname manuell festlegen (z.B. "gospelproject_noten_2026.zip"). Falls leer, wird der Name der Datei übernommen.',
                        }),
                        defineField({
                            name: 'customFilesize',
                            title: 'Manuelle Dateigrösse',
                            type: 'string',
                            description: 'Optional: Manuelle Grösse (z.B. "95 MB", "1.2 GB"). Bei Sanity-Uploads wird die Grösse automatisch berechnet.',
                        }),
                        defineField({
                            name: 'customUploadDate',
                            title: 'Manuelles Datum',
                            type: 'date',
                            description: 'Optional: Manuelles Datum (z.B. 2026-08-16). Bei Sanity-Uploads wird standardmässig das Upload-Datum verwendet.',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            filename: 'file.asset.originalFilename',
                            customFilename: 'customFilename',
                            externalUrl: 'externalUrl',
                            isNew: 'isNew',
                        },
                        prepare({ title, filename, customFilename, externalUrl, isNew }) {
                            const name = customFilename || filename || (externalUrl ? 'Google Drive / Externer Link' : 'Keine Datei');
                            return {
                                title: title || 'Unbenannter Download',
                                subtitle: `${isNew ? '🔥 [NEU] ' : ''}${name}`,
                            };
                        },
                    },
                }),
            ],
            description: 'Dateien zum Herunterladen für Mitglieder (ZIPs, Noten-PDFs, Audio, Bilder etc.).',
        }),
        defineField({
            name: 'callToAction',
            title: 'Call to Action',
            type: 'callToAction',
        }),
    ],
})
