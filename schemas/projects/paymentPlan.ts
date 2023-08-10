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
      name: 'paymentPlanPoints',
      title: 'Payment Plan Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
      description:
        'These are the bullet points of the payment. E.g.: 50% on booking, etc... short points.',
    },
  ],
}
