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
    {
      name: 'reference',
      title: 'Address Reference',
      type: 'string',
      description:
        'The reference number or ID of the address, e.g. "MD-001" MD - Media Street Dubai.',
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
      description: 'This is the date the address was added to the database.',
    },
  ],
}
