export default {
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'contentBlocks'}, {type: 'imageCarousel', preview: {select: {title: 'title'}}}, {type: 'customHeading'}, {type: 'button'}, {type: 'imageObj'}, {type: 'teaserBox'}],
    },
  ],
  preview: {
    select: {
      firstItem: 'items.0'
    },
    prepare({ firstItem }) {
      let title = 'Column Block';

      // Try to pick a meaningful preview value based on known types
      if (firstItem) {
        if (firstItem._type === 'customHeading' && firstItem.text) {
          title = `Heading: ${firstItem.text}`;
        } else if (firstItem._type === 'button' && firstItem.label) {
          title = `Button: ${firstItem.label}`;
        } else if (firstItem._type === 'contentBlocks') {
          title = 'Content Block';
        } else if (firstItem._type === 'imageCarousel') {
          title = 'Image Carousel';
        } else if (firstItem._type === 'teaserBox') {
          title = 'Teaser Box';
        }
      }

      return {
        title,
        subtitle: firstItem?._type || 'No content added yet',
      };
    }
  }
}