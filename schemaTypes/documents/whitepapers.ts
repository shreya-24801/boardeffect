import {getFlagByLanguage, isUniqueOtherThanLanguage} from '../../utils'

export default {
  name: 'whitepapers',
  title: 'Whitepaper Landing Page',
  type: 'document',
  options: {
    singleton: true,
  },
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
        isUnique: isUniqueOtherThanLanguage,
      },
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: `title`,
      language: 'language',
    },
    prepare: ({title, language}: {title: string; language: string}) => {
      const flag = getFlagByLanguage(language);
      return {
        title: title,
        subtitle: flag + language || 'Global',
      }
    },
  },
}
