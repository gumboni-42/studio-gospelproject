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

            S.divider(), // Adds a visual line in the sidebar

            // 2. Regular Document Lists (e.g. your Gallery or Blog)
            // This filters out the singletons so they don't appear in the "Regular" list
            ...S.documentTypeListItems().filter(
              (listItem) => !['gospelprojectPage', 'gospelationPage', 'gospelationEngagierenPage', 'homePage', 'teamPage', 'agendaPage', 'simplePage'].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool(),
    cloudinarySchemaPlugin(),
    presentationTool({
      previewUrl: process.env.NEXT_PUBLIC_BASE_URL,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
