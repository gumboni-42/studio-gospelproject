import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { HomeIcon, DocumentIcon } from '@sanity/icons' // Optional icons
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'
import { presentationTool } from 'sanity/presentation'


export default defineConfig({
  name: 'default',
  title: 'gospelproject',

  projectId: 'jynb9blr',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            // 1. Define the Singleton for Home Page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .icon(HomeIcon)
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),

            S.listItem()
              .title('Gospelproject Page')
              .id('gospelprojectPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelprojectPage')
                  .documentId('gospelprojectPage')
              ),

            S.listItem()
              .title('Gospelproject Mitmachen Page')
              .id('gospelprojectMitmachenPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelprojectMitmachenPage')
                  .documentId('gospelprojectMitmachenPage')
              ),

            S.listItem()
              .title('Gospelproject Anmeldung Page')
              .id('gospelprojectAnmeldungPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelprojectAnmeldungPage')
                  .documentId('gospelprojectAnmeldungPage')
              ),

            S.listItem()
              .title('Sponsoring Page')
              .id('sponsoringPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('sponsoringPage')
                  .documentId('sponsoringPage')
              ),

            S.listItem()
              .title('Gospelproject Termine Page')
              .id('gospelprojectTerminePage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelprojectTerminePage')
                  .documentId('gospelprojectTerminePage')
              ),

            S.listItem()
              .title('Gospelproject Teilnahmebedingungen Page')
              .id('gospelprojectBedingungenPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelprojectBedingungenPage')
                  .documentId('gospelprojectBedingungenPage')
              ),

            S.listItem()
              .title('Gospelproject Member Page')
              .id('gospelprojectMemberPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelprojectMemberPage')
                  .documentId('gospelprojectMemberPage')
              ),

            S.listItem()
              .title('Gospelation Page')
              .id('gospelationPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelationPage')
                  .documentId('gospelationPage')
              ),

            S.listItem()
              .title('Gospelation Engagieren Page')
              .id('gospelationEngagierenPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('gospelationEngagierenPage')
                  .documentId('gospelationEngagierenPage')
              ),


            S.listItem()
              .title('Team Page')
              .id('teamPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('teamPage')
                  .documentId('teamPage')
              ),

            S.listItem()
              .title('Agenda Page')
              .id('agendaPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('agendaPage')
                  .documentId('agendaPage')
              ),

            S.listItem()
              .title('Simple Page')
              .id('simplePage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('simplePage')
                  .documentId('simplePage')
              ),

            S.listItem()
              .title('Kontakt Page')
              .id('kontaktPage')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('kontaktPage')
                  .documentId('kontaktPage')
              ),


            S.listItem()
              .title('Footer Settings')
              .id('footerSettings')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('footerSettings')
                  .documentId('footerSettings')
              ),

            S.listItem()
              .title('Navigation Settings')
              .id('navigationSettings')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('navigationSettings')
                  .documentId('navigationSettings')
              ),

            S.divider(), // Adds a visual line in the sidebar

            // 2. Regular Document Lists (e.g. your Gallery or Blog)
            // This filters out the singletons so they don't appear in the "Regular" list
            ...S.documentTypeListItems().filter(
              (listItem) => !['sponsoringPage', 'gospelprojectPage', 'gospelprojectBedingungenPage', 'gospelprojectMitmachenPage', 'gospelprojectAnmeldungPage', 'gospelprojectTerminePage', 'gospelprojectMemberPage', 'gospelationPage', 'gospelationEngagierenPage', 'homePage', 'teamPage', 'agendaPage', 'simplePage', 'kontaktPage', 'footerSettings', 'navigationSettings'].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool(),
    cloudinarySchemaPlugin(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
        origin: process.env.SANITY_STUDIO_PREVIEW_URL ?? 'https://gospelproject.ch',
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
