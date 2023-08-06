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
      name: 'averagePricing',
      title: 'Average Pricing',
      type: 'array',
      of: [{type: 'number'}],
      description: 'The average pricing for all projects of the developer.',
    },
    {
      name: 'developerBuiltUpArea',
      title: 'Built-up Area',
      type: 'array',
      of: [{type: 'number'}],
      description: 'This is the average built-up areas of the developers projects.',
    },
    {
      name: 'addresses',
      title: 'Addresses',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'address'}]}],
      description: 'Multiple addresses associated with the developer.',
    },
    {
      name: 'propertyTypes',
      title: 'Property Types',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Villas', value: 'Villas'},
          {title: 'Townhouses', value: 'Townhouses'},
          {title: 'Apartments', value: 'Apartments'},
        ],
        layout: 'checkbox',
      },
      description: 'Multiple types of properties associated with the developer.',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'projects'}]}],
      description:
        'These are the projects associated with the developer. Select and/or create them.',
    },
    {
      name: 'areaType',
      title: 'Area Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Urban Living', value: 'Urbran Living'},
          {title: 'Beachfront', value: 'Beachfront'},
          {title: 'Golf-side villas', value: 'Golf-side villas'},
          {title: 'Lakeside homes', value: 'Lakeside homes'},
          {title: 'Waterfront properties', value: 'Waterfront properties'},
          {title: 'Pet-friendly communities', value: 'Pet-friendly communities'},
          {title: 'Family-friendly communities', value: 'Family-friendly communities'},
          {title: 'Health & wellness', value: 'Health & wellness'},
        ],
        layout: 'checkbox',
      },
      description: 'These are the types of areas the developer deals with.',
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
