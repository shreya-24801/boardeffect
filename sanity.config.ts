import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

import {documentInternationalization} from '@sanity/document-internationalization'

const creationDisabledSchemaTypes = ['whitepapers', 'webinars']

export default defineConfig({
  name: 'default',
  title: 'boardEffect',

  projectId: process.env.SANITY_PROJECT_ID || 'n2o8956d',
  dataset: process.env.SANITY_DATASET || 'development',

  plugins: [
    structureTool(),
    visionTool(), 
    colorInput(), 
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'en-us', title: 'English (United States)'},
        {id: 'en-uk', title: 'English (UK)'},
        {id: 'en-au', title: 'English (Australia)'},
      ],
      schemaTypes: ['page', 'whitepapers', 'whitepaper', 'webinars', 'webinar', 'blogs'],
    })
],

  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      const { type, schemaType } = creationContext;
      if (type === 'structure' && creationDisabledSchemaTypes.includes(schemaType)) {
        return [];
      }
      return prev;
    },
  },
})
