import { isUniqueOtherThanLanguage } from "../../utils"

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [{
      name: 'hero',
      title: 'Hero Banner'
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage
      },
    },
    {
      name: 'hero',
      title: 'Hero Banner',
      type: 'hero',
      group: 'hero',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'row'}],
      group: 'content',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }
  ],
  preview: {
    select: {
      title: `title`,
      media: 'hero.heroImage.media',
      language: 'language',
    },
    prepare: ({title, media, language}: {title: string, media: any, language: string}) => {
      return {
        title: title + ' (' + language + ')',
        media: media,
        language: language
      }
    },
  },
}