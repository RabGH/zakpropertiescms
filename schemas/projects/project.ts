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
      description: 'This is the date the project was added to the database.',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      description: 'This is the location of the whole project. Geopoint location.',
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
      description: 'These are the types of areas the projects are located in.',
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
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
          },
        },
      ],
      description: 'This is the completion date of the project. If it was an off-plan project.',
    },
    {
      name: 'totalPrice',
      title: 'Price',
      type: 'number',
      description:
        'This is the total price of the project. Either entire price or average for each property.',
    },
    {
      name: 'averagePrice',
      title: 'Average Price',
      type: 'array',
      of: [{type: 'number'}],
      description: 'Enter the minimum and maximum price in AED',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'reference',
      to: [{type: 'address'}],
      description: 'This is the general address of the property.',
    },
    {
      name: 'specificAddress',
      title: 'Specific Address',
      type: 'string',
      description: 'This is the specific address of the property.',
    },
    {
      name: 'projectBuiltUpArea',
      title: 'Built-up Area',
      type: 'array',
      of: [{type: 'number'}],
      description:
        'This is the built-up area of the project. Either entire built-up area or average for each property. Square Footage',
    },
    {
      name: 'projectType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Building', value: 'building'},
          {title: 'Districts', value: 'districts'},
        ],
        layout: 'radio',
      },
      description:
        'These are the types of properties in a project. Building will have number of floors and units. Districts will have number of villas/townhouses.',
    },
    {
      name: 'numFloors',
      title: 'Number of Floors',
      type: 'number',
      description: 'It indicates the number of floors in the building.',
    },
    {
      name: 'numUnits',
      title: 'Number of Units',
      type: 'number',
      description: 'It indicates the number of units in the building.',
    },
    {
      name: 'numOfHouses',
      title: 'Number of Villas/Townhouses',
      type: 'number',
      description: 'It indicates the number of villas or townhouses in the district.',
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
      description: 'This is the number of average bedrooms in the projects properties.',
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'reference',
      to: [{type: 'amenities'}],
      description: 'These are the amenities in the project. Select and create them as bundles.',
    },
    {
      name: 'properties',
      title: 'Properties',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'property'}]}],
      description:
        'These are the properties in/or associated the project. Select and/or create them.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'This is the description of the project.',
    },
    {
      name: 'presentation',
      title: 'Presentation',
      type: 'text',
      description: 'This is the presentation of the project. Be detailed here.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      description: 'This is the slug of the project. IMPORTANT TO GENERATE THE SLUG.',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      description:
        'This is the ID of the project. IMPORTANT TO SET THE ID. Make sure to name IDs for project in an organized manner. D01 D02 D03, D is for Development IDs',
    },
  ],
}
