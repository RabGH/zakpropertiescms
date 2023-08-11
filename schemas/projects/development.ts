export default {
  name: 'development',
  title: 'Development',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'This is the description of the development, keep it very short.',
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
      description: 'This is the date the development was added to the database.',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      description: 'This is the location of the whole development. Geopoint location.',
    },
    {
      name: 'developmentPropertyTypes',
      title: 'development Property Types',
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
      name: 'mainDevelopmentImage',
      title: 'Main development Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'developmentImages',
      title: 'Development Images',
      type: 'array',
      of: [{type: 'developmentImages'}],
    },
    {
      name: 'developmentsDeveloper',
      title: 'Developer',
      type: 'reference',
      to: [{type: 'developer'}],
      description: 'This is the developer associated with the development.',
    },
    {
      name: 'offplanProjects',
      title: 'Off Plan Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      description: 'These are the projects that belong to the offplan status.',
    },
    {
      name: 'readyProjects',
      title: 'Ready Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'projects'}]}],
      description: 'These are the projects that belong to the ready to buy status.',
    },
    {
      name: 'developmentAveragePrice',
      title: 'Average Price',
      type: 'array',
      of: [{type: 'number'}],
      description:
        'Enter the minimum and maximum average price in AED for properties in the project.',
    },
    {
      name: 'addresses',
      title: 'Addresses',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'address'}]}],
      description: 'Multiple addresses of each project.',
    },
    {
      name: 'developmentBuiltUpArea',
      title: 'Built-up Area',
      type: 'array',
      of: [{type: 'number'}],
      description:
        'This is the built-up area average for each property in the development. Square Footage',
    },
    {
      name: 'bulletPoints',
      title: 'Development Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
      description:
        'These are the bullet points of the development. E.g.: Closests schools, hospitals, airport, metro etc... short points.',
    },
    {
      name: 'developmentAmenities',
      title: 'Development Amenities',
      type: 'reference',
      to: [{type: 'developmentAmenitiesType'}],
      description:
        'These are the amenities in the development. Select and create them as bundles. E.g.: Closests schools, hospitals, airport, metro etc...',
    },
    {
      name: 'presentation',
      title: 'Presentation',
      type: 'text',
      description: 'This is the presentation of the development. Be detailed here.',
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
        'This is the slug of the development. IMPORTANT TO GENERATE THE SLUG, CLICK THE GENERATE BUTTON.',
    },
  ],
}
