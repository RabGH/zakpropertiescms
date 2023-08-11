export default {
  name: 'developmentAmenitiesType',
  title: 'Development Amenities Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'developmentsAmenities',
      title: 'Development Amenity Types',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Near Metro', value: 'Near Metro'},
          {title: 'Near Airport', value: 'Near Airport'},
          {title: 'Near Golf', value: 'Near Golf'},
          {title: 'Near Hospital', value: 'Near Hospital'},
          {title: 'Near Mall', value: 'Near Mall'},
          {title: 'Near Supermarket', value: 'Near Supermarket'},
          {title: 'Near Veterinary', value: 'Near Veterinary'},
          {title: 'Public Parks', value: 'Public Parks'},
        ],
        layout: 'checkbox',
      },
    },
  ],
}
