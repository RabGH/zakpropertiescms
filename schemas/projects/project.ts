export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'This is the title of the project, this shows on top of the image on the home page header.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'This is the description of the project. Keep it short and sweet. Shows on the home page.',
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
      name: 'projectDeveloper',
      title: 'Projects Developer',
      type: 'reference',
      to: [{type: 'developer'}],
      description: 'This is the developer associated with the project.',
    },
    {
      name: 'projectAreaTypes',
      title: 'Project Area Types',
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
      description:
        'This is the specific address of the project, leave this blank if address is enough to describe the properties locations.',
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
      type: 'array',
      of: [{type: 'string'}],
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
          {title: '3-6', value: '3-6'},
          {title: '5-6', value: '5-6'},
          {title: '7+', value: '7+'},
        ],
        layout: 'checkbox',
      },
      description:
        'This is the number of average bedrooms in the projects properties. Multiple can be selected.',
    },
    {
      name: 'projectAmenities',
      title: 'Project Amenities',
      type: 'reference',
      to: [{type: 'projectAmenitiesType'}],
      description:
        'These are the amenities in the property/project. Select and create them as bundles.',
    },
    {
      name: 'presentation',
      title: 'Presentation',
      type: 'text',
      description: 'This is the presentation of the project. Be detailed here.',
    },
    {
      name: 'projectDevelopment',
      title: 'Projects Development',
      type: 'reference',
      to: [{type: 'development'}],
      description: 'This is the development associated with the project.',
    },
    {
      name: 'projectStatus',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          {title: 'Offplan', value: 'offplan'},
          {title: 'Ready', value: 'ready'},
          {title: 'Hybrid', value: 'hybrid'},
        ],
        layout: 'radio',
      },
      description: 'This indicates whether the project is offplan, ready, or both.',
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
      name: 'paymentPlans',
      title: 'Payment Plans',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'paymentPlan'}]}],
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
      description:
        'This is the slug of the project. IMPORTANT TO GENERATE THE SLUG, CLICK THE GENERATE BUTTON.',
    },
  ],
}
