import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FolderIcon from '@material-ui/icons/Folder'
import Typography from '@material-ui/core/Typography'

import { List } from '../src'
import { defaultData } from './data/list-data'


storiesOf('List', module)
  .add('Default', () => (
    <List
      data={defaultData} 
    />
  ))
  .add('Divider', () => (
    <List
      divider
      data={defaultData} 
    />
  ))
  .add('Border & Divider', () => (
    <List
      border
      divider
      data={defaultData} 
    />
  ))
  .add('Spacing', () => (
    <List
      spacing={2}
      data={defaultData} 
    />
  ))
  .add('Expansion & ProgressBar & TimeStatus', () => {
    const modifiedData = defaultData.map((item ,i) => {
      const newFields = [
        { expand: true, progressBar: 20, timeStatus: '30m', progress: 'incomplete' },
        { expand: 'start', timeStatus: '2h', progress: 'complete' },
        { expand: 'end', timeStatus: '30m', progressBar: 80, progress: 'incomplete' },
        { expand: 'end', timeStatus: '4h', progress: 'complete' }
      ]
      const newItem = {
        ...item,
        ...newFields[i],
        expansionDetails: 'Example expansion details written here.',
      }
      return newItem
    })
    return (
      <List
        border
        divider
        data={modifiedData} 
      />
    )
  })
  .add('Avatar & Expansion', () => {
    const modifiedData = defaultData.map((item ,i) => {
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
    return (
      <List
        border
        divider
        data={modifiedData} 
      />
    )
  })
  .add('Avatar Size & BgColor & Chip', () => {
    const getAvatarData = (variant, color) => {
      const modifiedData = defaultData.map((item ,i) => {
        const newFields = [
          { heading: 'Default', chip: 'Marketplace', chipColor: '#6fcf97' },
          { heading: 'Small', avatarSize: 'sm', chip: 'Builder', chipColor: '#f2c94c' },
          { heading: 'Medium', avatarSize: 'md', chip: 'Builder', chipColor: '#f2c94c' },
          { heading: 'Large', avatarSize: 'lg', chip: 'Segment', chipColor: '#56ccf2' },
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
    return (
      <List
        spacing={2}
        data={[ ...circleVarant, ...roundedVariant ]} 
      />
    )
  })
  .add('Button & Selected & FocusOnSelected', () => {
    const modifiedData = defaultData.map((item, i) => {
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
    return (
      <div style={{ display: 'flex', justify: 'center' }}>
        <div style={{ marginRight: '30px' }}>
          <Typography variant='subtitle1'><strong>Button:</strong></Typography>
          <List
            width={300}
            spacing={2}
            data={modifiedData}
            button
            onItemClick={action('clicked')}
          />
        </div>
        <div>
          <Typography variant='subtitle1'><strong>Button FocusOnSelected:</strong></Typography>
          <List
            width={300}
            spacing={2}
            data={modifiedData}
            button
            focusOnSelected
            onItemClick={action('clicked')}
          />
        </div>
      </div>
    )
  })
  .add('Homepage-Example', () => {
    const leftData = defaultData.map((item, i) => {
      const avatarLabel = <Typography variant='subtitle1' style={{ color: '#0075ff', fontSize: '15px' }}>{i + 1}.</Typography>
      const newItem = {
        ...item,
        avatar: avatarLabel,
        avatarSize: 'sm',
        avatarBgColor: 'inherit',
        details: '',
      }
      return newItem
    })
    const rightData = defaultData.map((item , i) => {
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
    return (
      <div style={{ display: 'flex', justify: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <List
            width={239}
            spacing={2}
            data={leftData}
            button
            focusOnSelected
            onItemClick={action('clicked')}
          />
        </div>
        <List
          border
          divider
          width={700}
          data={rightData} 
        />
      </div>
    )
  })
