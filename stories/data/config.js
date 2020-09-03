const defaultConfig = [
  {
    id: 0,
    label: 'category',
    name: 'Category',
    type: 'radio',
    list: ['option1','option2','option3','option4','option5'],
  },
  {
    id: 1,
    label: 'type',
    name: 'Product type',
    type: 'checkbox',
    list: [{ option1: false },{ option2: false },{ option3: false },{ option4: false },{ option5: false }],
  },
  {
    id: 2,
    label: 'price',
    name: 'Price range',
    type: 'slider',
    list: [0, 1000],
    currentState: [0, 1000],
  },
  {
    id: 3,
    label: 'vendor_name',
    name: 'Vendors',
    type: 'checkbox',
    list: [
      'accessxpeto',
      'Spotzi',
      'Opta',
      'TMG Analytics',
      'EQ',
      'AdLoop',
      'FreeMedia',
      'Havas Media',
      'WL TEST',
      'Performics',
      'Popeyes Supplements Canada',
      'CLUB LINK',
      'Emerge Media',
      'Mastercard',
    ],
  },
]

export default defaultConfig
