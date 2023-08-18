export default {
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This is the name of the developer, IMPORTANT NOT TO HAVE EXTRA SPACES.',
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
      description: 'This is the main image of the developer, shows on top of card.',
    },
    {
      name: 'developerImages',
      title: 'Developer Images',
      type: 'array',
      of: [{type: 'developerImage'}],
      description: 'These are the developers images.',
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
      name: 'developerDevelopments',
      title: 'Developers Developments',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'development'}]}],
      description: 'These are the developments associated with the developer.',
    },
    {
      name: 'developerProjects',
      title: 'Developers Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      description: 'These are the projects associated with the developer.',
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
  ],
}
