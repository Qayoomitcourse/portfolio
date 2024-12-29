const heroSectionSchema = {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'heading2',
      title: 'Heading',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
    },
    {
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url',
        },
      ],
    },
  ],
};
export default heroSectionSchema;