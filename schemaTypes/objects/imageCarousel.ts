export default {
  name: 'imageCarousel',
  title: 'Image Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'imageObj'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.media',
    },
  },
}