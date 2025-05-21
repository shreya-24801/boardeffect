export default {
  name: 'row',
  title: 'Row',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'contentBlocks'}, {type: 'imageCarousel', preview: {select: {title: 'title'}}}, {type: 'customHeading'}, {type: 'columns'}, {type: 'imageObj'}],
    },
  ],
  preview: {
    select: {
      firstItem: 'items.0',
    },
    prepare({ firstItem }) {
      return {
        title: firstItem?.title || firstItem?._type || 'Row',
        subtitle: 'Row Component',
      };
    },
  },
}