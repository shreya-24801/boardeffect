export default {
  name: 'customHeading',
  title: 'Custom Heading',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'align',
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
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    }
  ],
}