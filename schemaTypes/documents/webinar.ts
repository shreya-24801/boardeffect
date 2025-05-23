import { getFlagByLanguage, isUniqueOtherThanLanguage } from "../../utils";

export default {
  name: 'webinar',
  title: 'Webinar',
  type: 'document',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'image',
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'videoDuration',
      title: 'Video Duration',
      type: 'string',
      description: 'Format: HH:MM:SS',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array', // Or use 'blockContent' if using portable text
      of: [{type: 'block'}],
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
      media: 'media',
    },
    prepare: ({title, language, media}: {title: string; language: string, media: any}) => {
      const flag = getFlagByLanguage(language);
      return {
        title: title,
        subtitle: flag + language || 'Global',
        media: media,
      }
    },
  }
}