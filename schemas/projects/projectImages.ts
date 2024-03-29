export default {
  name: 'projectImages',
  title: 'Project Images',
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
