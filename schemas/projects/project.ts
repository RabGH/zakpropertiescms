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
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
        inputUtc: true,
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
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
          {title: '2-3 Bedrooms', value: '2-3 Bedrooms'},
          {title: '2-4 Bedrooms', value: '2-4 Bedrooms'},
          {title: '3-4 Bedrooms', value: '3-4 Bedrooms'},
          {title: '3-5 Bedrooms', value: '3-5 Bedrooms'},
          {title: '5-6 Bedrooms', value: '5-6 Bedrooms'},
          {title: '7+ Bedrooms', value: '7+ Bedrooms'},
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
          {title: 'Meydan Real Estate', value: 'Meydan Real Estate'},
        ],
        layout: 'radio',
      },
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
      name: 'address',
      title: 'Address',
      type: 'reference',
      to: [{type: 'address'}],
    },
    {
      name: 'specificAddress',
      title: 'Specific Address',
      type: 'string',
    },
    {
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'number',
    },
    {
      name: 'projectBuiltUpArea',
      title: 'Built-up Area',
      type: 'number',
    },
    {
      name: 'projectType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Building', value: 'building'},
          {title: 'Districts', value: 'pieceOfLand'}, // Change to districts
        ],
        layout: 'radio',
      },
    },
    {
      name: 'numFloors',
      title: 'Number of Floors',
      type: 'number',
      hidden: ({parent}: {parent: {projectType: string}}) => parent.projectType !== 'building',
    },
    {
      name: 'numUnits',
      title: 'Number of Units',
      type: 'number',
      hidden: ({parent}: {parent: {projectType: string}}) => parent.projectType !== 'building',
    },
    {
      name: 'numVillas',
      title: 'Number of Villas/Townhouses',
      type: 'number',
      hidden: ({parent}: {parent: {projectType: string}}) => parent.projectType !== 'pieceOfLand',
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'string',
      options: {
        list: [
          {title: '2-3', value: '2-3'},
          {title: '2-4', value: '2-4'},
          {title: '3-4', value: '3-4'},
          {title: '3-5', value: '3-5'},
          {title: '5-6', value: '5-6'},
          {title: '7+', value: '7+'},
        ],
        layout: 'radio',
      },
      hidden: ({parent}: {parent: {projectType: string}}) => parent.projectType !== 'pieceOfLand',
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'reference',
      to: [{type: 'amenities'}],
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
