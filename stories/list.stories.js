import React from 'react'
import { storiesOf } from '@storybook/react'
import { List, TabPanels } from '../src'

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

const dataSetOne = [
  {
    avatar: true,
    heading: 'Instamek・Builder',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '30m',
    expand: true
  },
  {
    avatar: true,
    heading: 'BoardWalk・Marketplace',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '1h',
    expand: true
  },
  {
    avatar: true,
    heading: 'Jonesmedia・Builder',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '1h',
    expand: true
  },
  {
    avatar: true,
    heading: 'Glam・Marketplace',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '1h',
    expand: true
  },
  {
    details: <a href='#' style={{textDecoration: 'none', color: '#0088ff'}}>View more at notifications page</a>
  }
]

const dataSetTwo = [
  {
    avatar: 1,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'Instamek'
  },
  {
    avatar: 2,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'Boardwalk'
  },
  {
    avatar: 3,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'Jonesmedia'
  },
  {
    avatar: 4,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'Glam'
  },
  {
    avatar: 5,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'Vier'
  },
  {
    avatar: 6,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'YesUp'
  },
  {
    avatar: 7,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'Aviso'
  },
  {
    avatar: 8,
    avatarSize: 'small',
    avatarColor: '#0088ff',
    avatarVariant: 'rounded',
    heading: 'York'
  }
]

const dataSetThree = [
  {
    heading: 'Instamek',
    secondaryAction: <a href="#" style={{textDecoration: 'none', color: '#0088ff'}}>View all updates</a>
  },
  {
    avatar: true,
    heading: 'Marketplace',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '1h',
    progressBar: 100,
    expand: true,
    expansionDetails: <div style={{marginTop: '25px'}}><button style={{width: '100px', padding: '8px', borderRadius: '5px', fontSize:'14px', color: 'white', backgroundColor: '#2185d0', cursor: 'pointer'}}>View page</button> <a href="#" style={{ marginLeft: '10px', fontSize: '13px', textDecoration: 'none', color: '#0088ff'}}>Export CSV </a></div>
  },
  {
    avatar: true,
    heading: 'Builder',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '1h',
    progressBar: 50,
    expand: true,
    expansionDetails: <div style={{marginTop: '25px'}}><button style={{width: '100px', padding: '8px', borderRadius: '5px', fontSize:'14px', color: 'white', backgroundColor: '#2185d0', cursor: 'pointer'}}>View page</button> <a href="#" style={{ marginLeft: '10px', fontSize: '13px', textDecoration: 'none', color: '#0088ff'}}>Export CSV </a></div>
  },
  {
    avatar: true,
    heading: 'Builder',
    details: '[Job name] created on [date] for [customer] is finished.',
    timeStatus: '1h',
    progressBar: 70,
    expand: true,
    expansionDetails: <div style={{marginTop: '25px'}}><button style={{width: '100px', padding: '8px', borderRadius: '5px', fontSize:'14px', color: 'white', backgroundColor: '#2185d0', cursor: 'pointer'}}>View page</button> <a href="#" style={{ marginLeft: '10px', fontSize: '13px', textDecoration: 'none', color: '#0088ff'}}>Export CSV </a></div>
  },
]

const customTabs = {
  root: {
    borderBottom: '2px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
}

const customTab = theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
})

const labelArr = ['Weekly', 'Monthly']

const tabsArr = [
  { content: <List divider button focusSelect data={dataSetTwo} /> },
  { content: <List divider data={dataSetThree} />},
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
  .add('Combined With Tabs', () => (
    <>
      <div style={{margin: '50px'}}>
        <h2>Recent activity updates</h2>
        <List width='850px' divider data={dataSetOne}/>
      </div>

      <div styles={{ margin: '50px', width: '850px' }}>
        <h2 style={{ margin: '0px'}}>Recent activities by customer</h2>
        <TabPanels
          customStyles
          customTabs={customTabs}
          customTab={customTab}
          tabLabels={labelArr}
          tabChildren={tabsArr}
        />
      </div>
    </>
  ))