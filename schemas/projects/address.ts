export default {
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    {
      name: 'street',
      title: 'Street',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      options: {
        list: [
          {title: 'Dubai', value: 'Dubai'},
          {title: 'Sharjah', value: 'Sharjah'},
          {title: 'Ajman', value: 'Ajman'},
        ],
      },
    },
  ],
}
