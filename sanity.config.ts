import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'gospelproject',

  projectId: 'jynb9blr',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
