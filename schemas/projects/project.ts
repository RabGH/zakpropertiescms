export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      // Property Types
      name: 'projectPropertyTypes',
      title: 'Project Property Types',
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
    },
    {
      name: 'unitType',
      title: 'Unit Type',
      type: 'string',
      options: {
        list: [
          {title: '1-3 Bedrooms', value: '1-3 Bedrooms'},
          {title: '1-4 Bedrooms', value: '1-4 Bedrooms'},
          {title: '1-6 Bedrooms', value: '1-6 Bedrooms'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mainProjectImage',
      title: 'Main Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'developmentImage'}],
    },
    {
      // Developer
      name: 'mainDeveloper',
      title: 'Main Developer',
      type: 'string',
      options: {
        list: [
          {title: 'Emaar Properties', value: 'Emaar Properties'},
          {title: 'Damac Real Estate', value: 'Damac Real Estate'},
          {title: 'Nakheel Properties', value: 'Nakheel Properties'},
          {title: 'Aldar Properties', value: 'Aldar Properties'},
          {title: 'Manazel Real Estate', value: 'Manazel Real Estate'},
          {title: 'EllingTon Properties', value: 'EllingTon Properties'},
          {title: 'Meraas Real Estate', value: 'Meraas Real Estate'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'projectOffPlan',
      title: 'Project Off Plan',
      type: 'object',
      fields: [
        {
          name: 'offplan',
          title: 'Off-Plan',
          type: 'boolean',
        },
        {
          name: 'completionDate',
          title: 'Completion Date',
          type: 'string',
        },
      ],
    },
    {
      name: 'totalPrice',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'number',
    },
    {
      name: 'amenities',
      title: 'Amenity Types',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Gated Community', value: 'Gated Community'},
          {title: 'Kids Area', value: 'Kids Area'},
          {title: 'Retail Area', value: 'Retail Area'},
          {title: 'Grocery Store', value: 'Grocery Store'},
          {title: 'Gym', value: 'Gym'},
          {title: 'Pool', value: 'Pool'},
          {title: 'Helper Room', value: 'Helper Room'}
        ],
        layout: 'checkbox',
      },
    },
    {
      name: 'properties',
      title: 'Properties',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'property'}]}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
  ],
}
