export default {
  name: 'paymentPlan',
  title: 'Payment Plan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Payment Plan',
      type: 'string',
      description: 'The name of the payment plan, e.g. "10% Down Payment Plan".',
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
      description: 'This is the date the payment plan was added to the database.',
    },
    {
      name: 'type',
      title: 'Payment Plan Type',
      type: 'string',
      options: {
        list: [
          {title: 'Down Payment Plan', value: 'Down Payment Plan'},
          {title: 'Construction Linked Payment Plan', value: 'CLP Plan'},
          {title: 'Flexible Payment Plan', value: 'Flexible Payment Plan'},
          {title: 'Post Handover Payment Plan', value: 'Post Handover Payment Plan'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'radio',
      },
      description: 'The type of the payment plan, e.g. "CLP Plan".',
    },
    {
      name: 'customType',
      title: 'Custom Payment Plan Type',
      type: 'string',
      hidden: ({document}: {document: {type?: string}}) => document.type !== 'Other',
    },
    {
      name: 'reference',
      title: 'Payment Plan Reference',
      type: 'string',
      description: 'The reference number or ID of the payment plan, e.g. "PP-001".',
    },
    {
      name: 'description',
      title: 'Payment Plan Description',
      type: 'text',
      description:
        'The description of the payment plan, e.g. what it covers, what are the terms and conditions, etc.',
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
      description:
        'The validity of the payment plan, e.g. how long it is valid for, when it expires, or if it is subject to change.',
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
      description:
        'The timeline of the payment plan, e.g. when and how much money is due at each stage of the property transaction.',
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
      description:
        'The type of the amount that is paid at each timeline item, e.g. absolute or percentage.',
    },
    {
      name: 'amountAbsolute',
      title: 'Amount Absolute (AED)',
      type: 'number',
      description:
        'The amount in AED that is paid at each timeline item, if absolute is chosen as the amount type.',
    },
    {
      name: 'amountPercentage',
      title: 'Amount Percentage (%)',
      type: 'number',
      description:
        'The percentage of the total price that is paid at each timeline item, if percentage is chosen as the amount type.',
    },
    {
      name: 'interestRate',
      title: 'Interest Rate (%)',
      type: 'number',
      description: 'The interest rate that is charged on the payment amount, if any.',
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
      description: 'The penalty that is imposed on the user if they fail to pay on time, if any.',
    },
  ],
}
