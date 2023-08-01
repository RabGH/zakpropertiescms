export default {
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'averagePricing',
      title: 'Average Pricing',
      type: 'number',
      description: 'The average pricing for all projects of the developer.',
    },
    {
      name: 'developerBuiltUpArea',
      title: 'Built-up Area',
      type: 'array',
      of: [{type: 'number'}],
      description:
        'This is the built-up area of the developers projects. Either entire built-up area or average for each project in square footage',
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
      of: [{type: 'reference', to: [{type: 'project'}]}],
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
  ],
}
