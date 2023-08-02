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
      of: [{type: 'projectImages'}],
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'reference',
      to: [{type: 'developer'}],
      description: 'This is the developer associated with the project.',
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
      description: 'This is the general address of the properties in the project.',
    },
    {
      name: 'specificAddress',
      title: 'Specific Address',
      type: 'string',
      description: 'This is the specific address of the project, leave this blank if address is enough to describe the properties locations.',
    },
    {
      name: 'projectBuiltUpArea',
      title: 'Built-up Area',
      type: 'array',
      of: [{type: 'number'}],
      description:
        'This is the built-up area average for each property in the project. Square Footage',
    },
    {
      name: 'projectType',
      title: 'Project Type',
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
          {title: '1-1', value: '1-1'},
          {title: '2-2', value: '2-2'},
          {title: '3-3', value: '3-3'},
          {title: '4-4', value: '4-4'},
          {title: '1-4', value: '1-4'},
          {title: '1-3', value: '1-3'},
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
      description:
        'These are the amenities in the property/project. Select and create them as bundles.',
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
      name: 'projectOffPlan',
      title: 'Project Off Plan',
      type: 'array',
      of: [
        {
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
            {
              name: 'properties',
              title: 'Properties',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'property'}]}],
              description: 'These are the properties that belong to this offplan status.',
            },
          ],
        },
      ],
      description:
        'This is the offplan status and completion date of the project for each group of properties.',
    },
    {
      name: 'projectReadyToBuy',
      title: 'Project Ready To Buy',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'offplan',
              title: 'Off-Plan',
              type: 'boolean',
              hidden: true,
            },
            {
              name: 'completionDate',
              title: 'Completion Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD',
              },
              hidden: true,
            },
            {
              name: 'properties',
              title: 'Properties',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'property'}]}],
              description: 'These are the properties that belong to this ready to buy status.',
            },
          ],
        },
      ],
      description: 'This is the ready to buy status of the project for each group of properties.',
    },
    {
      name: 'paymentPlans',
      title: 'Payment Plans',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'paymentPlans'}]}],
      description:
        'These are the payment plans available for the project. Select and/or create them.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      description: 'This is the slug of the project. IMPORTANT TO GENERATE THE SLUG, CLICK THE GENERATE BUTTON.',
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
