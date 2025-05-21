export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageObj',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'textAlign',
      title: 'Text Align',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
    },
    {
      name: 'isHorizontalRuler',
      title: 'Horizontal Ruler',
      type: 'boolean',
    },
    {
      name: 'buttonList',
      title: 'Button List',
      type: 'array',
      of: [{type: 'button'}],
    }
  ],
}