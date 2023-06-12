export default {
  name: 'developmentImage',
  title: 'Development Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        inHightLight: true,
      },
      initialValue: () => {
        return 'UAEZakPropertiesImage'
      },
    },
  ],
  options: {
    hotspot: true,
  },
}
