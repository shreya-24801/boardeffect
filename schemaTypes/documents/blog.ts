export default {
  name: 'post',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'article_published_date',
      type: 'datetime',
      title: 'Published Date',
    },
    {
      name: 'article_modified_date',
      type: 'datetime',
      title: 'Modified Date',
    },
    {
      name: 'body',
      type: 'text', // Or use 'blockContent' if using portable text
      title: 'Body',
    },
    {
      name: 'og_image',
      title: 'OG Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        }
      ]
    },
    {
      name: 'previous_post',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'string' }
      ],
    },
    {
      name: 'next_post',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'string' }
      ],
    },
    {
      name: 'author_name',
      type: 'string',
      title: 'Author Name',
    }
  ],
}