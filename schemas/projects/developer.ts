export default {
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This is the name of the developer.',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
        inputUtc: true,
      },
      description: 'This is the date the developer was added to the database.',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'This is the logo image of the developer.',
    },
    {
      name: 'mainDeveloperImage',
      title: 'Main Developer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'developerImages',
      title: 'Developer Images',
      type: 'array',
      of: [{type: 'developerImage'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'This is a brief introduction of the developer.',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
      description: 'This is the URL of the developers official website.',
    },
    {
      name: 'developments',
      title: 'Developers Developments',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'development'}]}],
      description: 'This is the development associated with the project.',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      description:
        'This is the slug of the developer. IMPORTANT TO GENERATE THE SLUG, CLICK THE GENERATE BUTTON.',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      description:
        'This is the ID of the developer. IMPORTANT TO SET THE ID. Make sure to name IDs for developers in an organized manner. D01 D02 D03, D is for Developer IDs',
    },
  ],
}
