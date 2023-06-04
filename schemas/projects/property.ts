export default {
  name: 'property',
  title: 'Property',
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
      description: 'This is the date the property was added to the database.',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      description: 'This is the location of the property. Geopoint location.',
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
      name: 'areaType',
      title: 'Area Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Urban Living', value: 'Urbran Living'},
          {title: 'Beachfront property', value: 'Beachfront property'},
          {title: 'Golf-side villa', value: 'Golf-side villa'},
          {title: 'Lakeside home', value: 'Lakeside home'},
          {title: 'Waterfront property', value: 'Waterfront property'},
          {title: 'Pet-friendly community', value: 'Pet-friendly communities'},
          {title: 'Family-friendly community', value: 'Family-friendly communities'},
          {title: 'Health & wellness', value: 'Health & wellness'},
        ],
        layout: 'checkbox',
      },
      description: 'This is the type of area the property is located in.',
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          {title: 'Villa', value: 'Villa'},
          {title: 'Townhouse', value: 'Townhouse'},
          {title: 'Apartment', value: 'Apartment'},
          {title: 'Penthouse', value: 'Penthouse'},
          {title: 'Loft & Duplex', value: 'Loft & Duplex'},
          {title: 'Plot', value: 'Plot'},
        ],
        layout: 'radio',
      },
      description: 'This is the type of property.',
    },
    {
      name: 'mainPropertyImage',
      title: 'Main Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'This is the main image of the property. It will showcase as the first image in its card.',
    },
    {
      name: 'propertyImages',
      title: 'Property Images',
      type: 'array',
      of: [{type: 'propertyImage'}],
      description:
        'These are the sub images of the property. They will showcase as the rest of the images in its card.',
    },
    {
      name: 'totalPrice',
      title: 'Price',
      type: 'number',
      description:
        'Prices can only go from 1,000,000 AED to 500,000,000 AED. Notify if there is higher or lower.',
    },
    {
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'number',
      description:
        'The area of the property in square feet. Range: 0 to 10000. Notify if there is higher.',
    },
    {
      name: 'plottedArea',
      title: 'Plotted Area',
      type: 'number',
      description:
        'The entire plotted area of the property in square feet. Range: 0 to 10000. Notify if there is higher.',
    },
    {
      name: 'builtUpArea',
      title: 'Built Up Area',
      type: 'number',
      description:
        'The area of the built property in square feet. Range: 0 to 10000. Notify if there is higher.',
    },
    {
      name: 'propertyOffPlan',
      title: 'Property Off Plan',
      type: 'object',
      fields: [
        {
          name: 'offplan',
          title: 'Off-Plan',
          type: 'boolean',
        },
        {
          name: 'propertyCompletionDate',
          title: 'Property Completion Date',
          type: 'datetime',
          options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm:ss',
            inputUtc: true,
          },
        },
      ],
      description: 'This is the completion date of the property, if it was an offplan property.',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'reference',
      to: [{type: 'features'}],
      description: 'These are the features of the property. Select and create them as bundles.',
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      description: 'Bedrooms can only go from 1 to 15. Notify if there is higher.',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      description:
        'Bathrooms can only go to infinite, not used for search criteria. Notify if needed.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'This is the description of the property.',
    },
    {
      name: 'projectId',
      title: 'Project ID',
      type: 'reference',
      to: [{type: 'projects'}],
      weak: true,
      description: 'This is the project the property is in.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      description: 'This is the slug of the property. IMPORTANT TO GENERATE THE SLUG.',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      description:
        'This is the ID of the property. IMPORTANT TO SET THE ID. Make sure to name IDs for properties in an organized manner. P01 P02 P03, P is for Property IDs',
    },
  ],
}
