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
  .add('Default', () => <List divider data={exampleData} />)