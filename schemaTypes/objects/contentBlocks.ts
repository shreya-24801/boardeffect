export default {
  name: 'contentBlocks',
  title: 'Content Blocks',
  type: 'object',
  fields: [
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{type: 'block'}, { type: 'imageObj'}],
    },
  ],
}