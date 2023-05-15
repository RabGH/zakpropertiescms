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
      name: 'location',
      title: 'Location',
      type: 'geopoint',
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
    },
    {
      name: 'mainPropertyImage',
      title: 'Main Property Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'propertyImages',
      title: 'Property Images',
      type: 'array',
      of: [{type: 'propertyImage'}],
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
      name: 'plottedArea',
      title: 'Plotted Area',
      type: 'number',
    },
    {
      name: 'builtUpArea',
      title: 'Built Up Area',
      type: 'number',
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
          type: 'string',
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'reference',
      to: [{type: 'features'}],
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectId',
      title: 'Project ID',
      type: 'reference',
      to: [{type: 'projects'}],
      weak: true,
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
