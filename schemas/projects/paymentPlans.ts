export default {
  name: 'paymentPlans',
  title: 'Payment Plans',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Payment Plan',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Payment Plan Type',
      type: 'string',
      options: {
        list: [
          {title: 'Down Payment Plan', value: 'Down Payment Plan'},
          {title: 'Construction Linked Payment Plan', value: 'CLP Plan'},
          {title: 'Flexi Payment Plan', value: 'Flexi Payment Plan'},
          {title: 'Possession Linked Payment Plan', value: 'PLP Plan'},
          {title: 'Post Handover Payment Plan', value: 'Post Handover Payment Plan'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'reference',
      title: 'Payment Plan Reference',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Payment Plan Description',
      type: 'text',
    },
    {
      name: 'validity',
      title: 'Payment Plan Validity',
      type: 'object',
      fields: [
        {
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
        },
        {
          name: 'endDate',
          title: 'End Date',
          type: 'date',
        },
        {
          name: 'changeable',
          title: 'Changeable',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'item',
              title: 'Timeline Item',
              type: 'string',
            },
            {
              name: 'dueDate',
              title: 'Due Date',
              type: 'date',
            },
          ],
        },
      ],
    },
    {
      name: 'amountType',
      title: 'Amount Type',
      type: 'string',
      options: {
        list: [
          {title: 'Absolute', value: 'Absolute'},
          {title: 'Percentage', value: 'Percentage'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'amountAbsolute',
      title: 'Amount Absolute (AED)',
      type: 'number',
    },
    {
      name: 'amountPercentage',
      title: 'Amount Percentage (%)',
      type: 'number',
    },
    {
      name: 'interestRate',
      title: 'Interest Rate (%)',
      type: 'number',
    },
    {
      name: 'penalty',
      title: 'Penalty',
      type: 'object',
      fields: [
        {
          name: 'lateFee',
          title: 'Late Fee (AED)',
          type: 'number',
        },
        {
          name: 'impact',
          title: 'Impact on Payment Plan',
          type: 'text',
        },
      ],
    },
  ],
}
