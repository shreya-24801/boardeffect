export default {
  name: 'columns',
  title: 'Columns',
  type: 'object',
  fields: [
    {
      name: 'subColumns',
      title: 'Sub Columns',
      type: 'array',
      of: [{type: 'column'}],
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: '1/3', value: '1/3'}, {title: '2/3', value: '2/3'}, {title: '1/2', value: '1/2'},
        ],
      },
    }
  ],
  preview: {
    select: {
      firstColumn: 'subColumns.0',
    },
    prepare({ firstColumn }) {
      return {
        title: 'Columns Block',
        subtitle: firstColumn?._type ? `First column type: ${firstColumn._type}` : 'No columns added yet',
      };
    },
  },
}