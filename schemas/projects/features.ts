export default {
  name: 'features',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Feature Types',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Balcony', value: 'Balcony'},
          {title: 'Built in Wardrobes', value: 'Built in Wardrobes'},
          {title: 'Cable Ready', value: 'Cable Ready'},
          {title: 'Central Air Conditioning', value: 'Central Air Conditioning'},
          {title: 'Concierge Service', value: 'Concierge Service'},
          {title: 'Covered Parking', value: 'Covered Parking'},
          {title: 'Kitchen Appliances', value: 'Kitchen Appliances'},
          {title: 'Maid Service', value: 'Maid Service'},
          {title: 'Maids Room', value: 'Maids Room'},
          {title: 'Pets Allowed', value: 'Pets Allowed'},
          {title: 'Private Garden', value: 'Private Garden'},
          {title: 'Private Gym', value: 'Private Gym'},
          {title: 'Private Jacuzzi', value: 'Private Jacuzzi'},
          {title: 'Private Pool', value: 'Private Pool'},
          {title: 'Sea Water View', value: 'Sea Water View'},
          {title: 'Security', value: 'Security'},
          {title: 'Shared Gym', value: 'Shared Gym'},
          {title: 'Shared Swimming Pool', value: 'Shared Swimming Pool'},
          {title: 'Spa', value: 'Spa'},
          {title: 'Study', value: 'Study'},
          {title: 'View of Landmark', value: 'View of Landmark'},
          {title: 'Walk in Closet', value: 'Walk in Closet'},
          {title: 'Basement', value: 'Basement'},
          {title: 'Basement Parking', value: 'Basement Parking'},
          {title: 'BBQ Area', value: 'BBQ Area'},
          {title: 'Beach Access', value: 'Beach Access'},
          {title: 'Carpets', value: 'Carpets'},
          {title: 'Childrens Play Area', value: 'Childrens Play Area'},
          {title: 'City View', value: 'City View'},
          {title: 'Community View', value: 'Community View'},
          {title: 'Drivers Room', value: 'Drivers Room'},
          {title: 'East Orientation', value: 'East Orientation'},
          {title: 'Fully Fitted Kitchen', value: 'Fully Fitted Kitchen'},
          {title: 'Garden View', value: 'Garden View'},
          {title: 'Gazebo', value: 'Gazebo'},
          {title: 'Golf View', value: 'Golf View'},
          {title: 'Heating', value: 'Heating'},
          {title: 'Indoor Swimming Pool', value: 'Indoor Swimming Pool'},
          {title: 'Maintenance', value: 'Maintenance'},
          {title: 'Marble Floors', value: 'Marble Floors'},
          {title: 'Near Airport', value: 'Near Airport'},
          {title: 'Near Golf', value: 'Near Golf'},
          {title: 'Near Hospital', value: 'Near Hospital'},
          {title: 'Near Mall', value: 'Near Mall'},
          {title: 'Near Supermarket', value: 'Near Supermarket'},
          {title: 'Near Veterinary', value: 'Near Veterinary'},
          {title: 'North Orientation', value: 'North Orientation'},
          {title: 'On High Floor', value: 'On High Floor'},
          {title: 'On Low Floor', value: 'On Low Floor'},
          {title: 'On Mid Floor', value: 'On Mid Floor'},
          {title: 'Private Garage', value: 'Private Garage'},
          {title: 'Public Parks', value: 'Public Parks'},
          {title: 'Sauna', value: 'Sauna'},
          {title: 'South Orientation', value: 'South Orientation'},
          {title: 'Steam Room', value: 'Steam Room'},
          {title: 'Storage Room', value: 'Storage Room'},
          {title: 'Terrace', value: 'Terrace'},
          {title: 'Upgraded Interior', value: 'Upgraded Interior'},
          {title: 'West Orientation', value: 'West Orientation'},
          {title: 'Within a Compound', value: 'Within a Compound'},
          {title: 'Wood Flooring', value: 'Wood Flooring'},
          {title: 'Private Cinema', value: 'Private Cinema'},
          {title: 'Entertainment Room', value: 'Entertainment Room'},
          {title: 'Main and Service Elevators', value: 'Main and Service Elevators'},
          {title: 'Direct Private Beach Access', value: 'Direct Private Beach Access'},
          {title: 'Resort Amenities', value: 'Resort Amenities'},
          {title: 'Near Metro', value: 'Near Metro'},
          {title: 'Large Plot', value: 'Large Plot'},
          {title: 'Brand New', value: 'Brand New'},
        ],
        layout: 'checkbox',
      },
    },
  ],
}