import React from 'react'
import { storiesOf } from '@storybook/react'
import { List } from '../src'

import FolderIcon from '@material-ui/icons/Folder';


const exampleData = [
  {
    avatar: <FolderIcon />,
    heading: 'Heading・One',
    details: 'Secondary summary one.',
    timeStatus: '30m',
    expand: true,
    expansionDetails: 'Example expansion details written here.'
  },
  {
    avatar: <FolderIcon />,
    heading: 'Heading・Two',
    details: 'Secondary summary two.',
    expand: true,
    expansionDetails: 'Example expansion details written here.'
  },
  {
    avatar: <FolderIcon />,
    heading: 'Heading',
    progressBar: 50,
    details: 'Secondary summary two.',
    expand: true,
    expansionDetails: 'Example expansion details written here.'
  },
  {
    avatar: <FolderIcon />,
    heading: 'Heading・Two',
  },
]

storiesOf('List', module)
  .add('Default', () => <List data={[
    { heading: 'Default View Title', details: 'Default view for secondary title' },
    { heading: 'Default View Title', details: 'Default view for secondary title' }
  ]} />)
  .add('With Divider', () => <List divider data={[
    { heading: 'Default View Title', details: 'Default view for secondary title' },
    { heading: 'Default View Title', details: 'Default view for secondary title' }
  ]} />)
  .add('With Avatar', () => <List divider data={[
    { avatar: <FolderIcon />, heading: 'Default View Title', details: 'Default view for secondary title' },
    { avatar: <FolderIcon />, heading: 'Default View Title', details: 'Default view for secondary title' }
  ]} />)
  .add('With Expansion', () => <List divider data={[
    { expand: true, expansionDetails: <FolderIcon />, heading: 'Default View Title', details: 'Default view for secondary title' },
    { expand: true, expansionDetails: 'Example expansion details written here.', heading: 'Default View Title', details: 'Default view for secondary title' }
  ]} />)
  .add('With Progress Bar', () => <List divider data={[
    { progressBar: 30, heading: 'Default View Title', details: 'Default view for secondary title' },
    { progressBar: 60, heading: 'Default View Title', details: 'Default view for secondary title' }
  ]} />)
  .add('With Time Status', () => <List divider data={[
    { timeStatus: '20m', heading: 'Default View Title', details: 'Default view for secondary title' },
    { timeStatus: '30m', expand: true, heading: 'Default View Title', details: 'Default view for secondary title' }
  ]} />)
  .add('Combined', () => <List divider data={exampleData} />)