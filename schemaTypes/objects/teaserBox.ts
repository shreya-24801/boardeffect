export default {
  name: 'teaserBox',
  title: 'Teaser Box',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'imageObj',
    }
  ],
}