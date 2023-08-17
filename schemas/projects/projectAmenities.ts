export default {
  name: 'projectAmenitiesType',
  title: 'Project Amenities Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'projectsAmenities',
      title: 'Project Amenity Types',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Gated Community', value: 'Gated Community'},
          {title: 'Garage', value: 'Garage'},
          {title: 'Pool', value: 'Pool'},
          {title: 'Gymnasium', value: 'Gymnasium'},
          {title: 'Restaurant', value: 'Restaurant'},
          {title: 'Bar', value: 'Bar'},
          {title: 'Common Garden', value: 'Common Garden'},
          {title: 'Common Terrace', value: 'Common Terrace'},
          {title: 'BBQ Area', value: 'BBQ Area'},
          {title: 'Kids Area', value: 'Kids Area'},
          {title: 'Kids Club', value: 'Kids Club'},
          {title: 'Retail Area', value: 'Retail Area'},
          {title: 'Grocery Store', value: 'Grocery Store'},
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
