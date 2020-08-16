import React from 'react'
// import { storiesOf } from '@storybook/react'
import FolderIcon from '@material-ui/icons/Folder'
import Typography from '@material-ui/core/Typography'

import { List } from '../src/index'
import { defaultData } from './data/list-data'

const modifiedDataExpansion = defaultData.map((item, i) => {
  const newFields = [
    {
      expand: true,
      progressBar: 20,
      timeStatus: '30m',
      progress: 'incomplete',
    },
    { expand: 'start', timeStatus: '2h', progress: 'complete' },
    {
      expand: 'end',
      timeStatus: '30m',
      progressBar: 80,
      progress: 'incomplete',
    },
    { expand: 'end', timeStatus: '4h', progress: 'complete' },
  ]
  const newItem = {
    ...item,
    ...newFields[i],
    expansionDetails: 'Example expansion details written here.',
  }
  return newItem
})

const modifiedDataAvatar = defaultData.map((item, i) => {
  const newFields = [
    { expand: true },
    { avatarVariant: 'circle', expand: 'start' },
    { avatarVariant: 'square', expand: 'end' },
    { avatarVariant: 'rounded', expand: 'end' },
  ]
  const newItem = {
    ...item,
    ...newFields[i],
    expansionDetails: 'Example expansion details written here.',
    avatar: <FolderIcon />,
  }
  return newItem
})

const getAvatarData = (variant, color) => {
  const modifiedData = defaultData.map((item, i) => {
    const newFields = [
      { heading: 'Default', chip: 'Marketplace', chipColor: '#6fcf97' },
      {
        heading: 'Small',
        avatarSize: 'sm',
        chip: 'Builder',
        chipColor: '#f2c94c',
      },
      {
        heading: 'Medium',
        avatarSize: 'md',
        chip: 'Builder',
        chipColor: '#f2c94c',
      },
      {
        heading: 'Large',
        avatarSize: 'lg',
        chip: 'Segment',
        chipColor: '#56ccf2',
      },
    ]
    const newItem = {
      ...item,
      ...newFields[i],
      avatar: <FolderIcon />,
      avatarBgColor: color,
      avatarVariant: variant,
    }
    return newItem
  })
  return modifiedData
}
const circleVarant = getAvatarData('circle', 'pink')
const roundedVariant = getAvatarData('rounded', 'grey')

const modifiedDataButton = defaultData.map((item, i) => {
  const newItem = {
    ...item,
    avatar: i + 1,
    avatarSize: 'sm',
    avatarVariant: 'rounded',
    avatarBgColor: 'green',
    details: '',
  }
  return newItem
})

const leftData = defaultData.map((item, i) => {
  const avatarLabel = (
    <Typography
      variant="subtitle1"
      style={{ color: '#0075ff', fontSize: '15px' }}
    >
      {i + 1}.
    </Typography>
  )
  const newItem = {
    ...item,
    avatar: avatarLabel,
    avatarSize: 'sm',
    avatarBgColor: 'inherit',
    details: '',
  }
  return newItem
})
const rightData = defaultData.map((item, i) => {
  const newFields = [
    { chip: 'Marketplace', chipColor: '#6fcf97', timeStatus: '30m' },
    { chip: 'Builder', chipColor: '#f2c94c', timeStatus: '2h' },
    { chip: 'Builder', chipColor: '#f2c94c', timeStatus: '30m' },
    { chip: 'Segment', chipColor: '#56ccf2', timeStatus: '4h' },
  ]
  const newItem = {
    ...item,
    ...newFields[i],
    expand: true,
    expansionDetails: 'Example expansion details written here.',
    avatar: <FolderIcon />,
    avatarVariant: 'rounded',
  }
  return newItem
})

export default {
  title: 'List',
  component: List,
  args: {
    border: false,
    button: false,
    data: defaultData,
    divider: false,
    focusOnSelected: false,
    onItemClick: () => null,
    spacing: 0,
    width: 600,
  },
  argTypes: {
    data: {
      control: null,
    },
    spacing: {
      type: { name: 'number', required: true },
    },
  },
}

const Template = (args) => <List {...args} />
const TemplateHome = (args) => (
  <div style={{ display: 'flex', justify: 'center' }}>
    <div style={{ marginRight: '20px' }}>
      <List {...args.left} />
    </div>
    <List {...args.right} />
  </div>
)

export const Default = Template.bind({})

// ===

export const Expansion = Template.bind({})

Expansion.args = {
  border: true,
  data: modifiedDataExpansion,
  divider: true,
}

// ===

export const Avatar = Template.bind({})

Avatar.args = {
  border: true,
  data: modifiedDataAvatar,
  divider: true,
}

// ===

export const Chip = Template.bind({})

Chip.args = {
  data: [...circleVarant, ...roundedVariant],
  spacing: 2,
}

// ===

export const Button = Template.bind({})

Button.args = {
  button: true,
  data: modifiedDataButton,
  focusOnSelected: true,
  spacing: 2,
  width: 300,
}

// ===

export const Home = TemplateHome.bind({})

Home.args = {
  left: {
    button: true,
    data: leftData,
    focusOnSelected: true,
    spacing: 2,
    width: 239,
  },
  right: {
    border: true,
    data: rightData,
    divider: true,
    width: 700,
  },
}

Home.argTypes = {
  border: {
    control: null,
  },
  button: {
    control: null,
  },
  data: {
    control: null,
  },
  divider: {
    control: null,
  },
  focusOnSelected: {
    control: null,
  },
  onItemClick: {
    control: null,
  },
  spacing: {
    control: null,
  },
  width: {
    control: null,
  },
}

Home.parameters = {
  controls: { hideNoControlsWarning: true },
}
