import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// import { List, TabPanels } from '../src'
import { List } from '../src'

import FolderIcon from '@material-ui/icons/Folder'
// import { Grid } from '@material-ui/core'


const defaultData = [
  {
    avatar: null,
    heading: 'Heading・One',
    progressBar: 0,
    details: 'Secondary summary one.',
    timeStatus: '',
    expand: false,
    expansionDetails: '',
  },
  {
    avatar: null,
    heading: 'Heading・Two',
    progressBar: 0,
    details: 'Secondary summary two.',
    timeStatus: '',
    expand: false,
    expansionDetails: '',
  },
  {
    avatar: null,
    heading: 'Heading・Three',
    progressBar: 0,
    details: 'Secondary summary three.',
    timeStatus: '',
    expand: false,
    expansionDetails: '',
  },
  {
    avatar: null,
    heading: 'Heading・Four',
    progressBar: 0,
    details: 'Secondary summary four.',
    timeStatus: '',
    expand: false,
    expansionDetails: '',
  },
]

// const exampleData = [
//   {
//     avatar: <FolderIcon />,
//     heading: 'Heading・One',
//     details: 'Secondary summary one.',
//     timeStatus: '30m',
//     expand: 'start',
//     expansionDetails: 'Example expansion details written here.'
//   },
//   {
//     avatar: <FolderIcon />,
//     heading: 'Heading',
//     progressBar: 50,
//     details: 'Secondary summary two.',
//     expand: true,
//     expansionDetails: 'Example expansion details written here.'
//   },
//   {
//     avatar: <FolderIcon />,
//     heading: 'Heading・Two',
//     details: 'Secondary summary two.',
//     expand: 'end',
//     expansionDetails: 'Example expansion details written here.'
//   },
//   {
//     avatar: <FolderIcon />,
//     heading: 'Heading・Two',
//   },
// ]

// const dataSetOne = [
//   {
//     avatar: 'empty',
//     heading: 'Instamek・Builder',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '30m',
//     expand: true
//   },
//   {
//     avatar: 'empty',
//     heading: 'BoardWalk・Marketplace',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '1h',
//     expand: true
//   },
//   {
//     avatar: 'empty',
//     heading: 'Jonesmedia・Builder',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '1h',
//     expand: true
//   },
//   {
//     avatar: 'empty',
//     heading: 'Glam・Marketplace',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '1h',
//     expand: true
//   },
//   {
//     details: <a href='#' style={{textDecoration: 'none', color: '#0088ff'}}>View more at notifications page</a>
//   }
// ]

// const dataSetTwo = [
//   {
//     avatar: 1,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'Instamek'
//   },
//   {
//     avatar: 2,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'Boardwalk'
//   },
//   {
//     avatar: 3,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'Jonesmedia'
//   },
//   {
//     avatar: 4,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'Glam'
//   },
//   {
//     avatar: 5,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'Vier'
//   },
//   {
//     avatar: 6,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'YesUp'
//   },
//   {
//     avatar: 7,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'Aviso'
//   },
//   {
//     avatar: 8,
//     avatarSize: 'small',
//     avatarColor: '#0088ff',
//     avatarVariant: 'rounded',
//     heading: 'York'
//   }
// ]

// const dataSetThree = [
//   {
//     heading: 'Instamek',
//     secondaryAction: <a href="#" style={{textDecoration: 'none', color: '#0088ff'}}>View all updates</a>
//   },
//   {
//     avatar: 'empty',
//     heading: 'Marketplace',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '1h',
//     progressBar: 100,
//     expand: true,
//     expansionDetails: (
//       <div style={{marginTop: '25px'}}>
//         <button style={{width: '100px', padding: '8px', borderRadius: '5px', fontSize:'14px', color: 'white', backgroundColor: '#2185d0', cursor: 'pointer'}}>
//           View page
//         </button> 
//         <a href="#" style={{ marginLeft: '10px', fontSize: '13px', textDecoration: 'none', color: '#0088ff'}}>Export CSV </a>
//       </div>
//     )
//   },
//   {
//     avatar: 'empty',
//     heading: 'Builder',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '1h',
//     progressBar: 50,
//     expand: true,
//     expansionDetails: (
//       <div style={{marginTop: '25px'}}>
//         <button style={{width: '100px', padding: '8px', borderRadius: '5px', fontSize:'14px', color: 'white', backgroundColor: '#2185d0', cursor: 'pointer'}}>
//           View page
//         </button> 
//         <a href="#" style={{ marginLeft: '10px', fontSize: '13px', textDecoration: 'none', color: '#0088ff'}}>Export CSV </a>
//       </div>
//     )
//   },
//   {
//     avatar: 'empty',
//     heading: 'Builder',
//     details: '[Job name] created on [date] for [customer] is finished.',
//     timeStatus: '1h',
//     progressBar: 70,
//     expand: true,
//     expansionDetails: (
//       <div style={{marginTop: '25px'}}>
//         <button style={{width: '100px', padding: '8px', borderRadius: '5px', fontSize:'14px', color: 'white', backgroundColor: '#2185d0', cursor: 'pointer'}}>
//           View page
//         </button> 
//         <a href="#" style={{ marginLeft: '10px', fontSize: '13px', textDecoration: 'none', color: '#0088ff'}}>Export CSV </a>
//       </div>
//     )
//   },
// ]

// const rawLogData = [
//   {
//     id: 3727,
//     email: 'user.name@email.com',
//     time_st: '2020-06-12T21:23:59.000Z',
//     action: 'edit POI - 1',
//     return_meta: {
//       action: "[{\"field\":\"radius\",\"value\":300}][{\"field\":\"lat\",\"value\":47.6},{\"field\":\"lon\",\"value\":89.9},{\"field\":\"name\",\"value\":\"'Hello'\"}]",
//       message: 'This POI 180797 has been updated under POI list 1319',
//     },
//     http_method: 'POST',
//     api_path: 'poi/edit',
//     payload: {
//       poi: {
//         lat: 47.6,
//         lon: 89.9,
//         name: 'Hello',
//         poiid: 180797,
//         radius: 300,
//         poilistid: '1319',
//       },
//     },
//     return_code: 200,
//   },
//   {
//     id: 3728,
//     email: 'user.name@email.com',
//     time_st: '2020-06-12T21:26:46.000Z',
//     action: 'edit POI - 2',
//     return_meta: {
//       action: "[{\"field\":\"radius\",\"value\":300}][{\"field\":\"lat\",\"value\":47.6},{\"field\":\"lon\",\"value\":89.9},{\"field\":\"name\",\"value\":\"'hello'\"}]",
//       message: 'This POI 180797 has been updated under POI list 1319',
//     },
//     http_method: 'POST',
//     api_path: 'poi/edit',
//     payload: {
//       poi: {
//         lat: 47.6,
//         lon: 89.9,
//         name: 'hello',
//         poiid: 180797,
//         radius: 300,
//         poilistid: '1319',
//       },
//     },
//     return_code: 200,
//   },
// ]

// const finalLogData = rawLogData.reduce((acc, log) => {
//   const newObj = {
//     expand: true,
//     expansionDetails: log.return_meta.message,
//     heading: log.action,
//     details: log.return_meta.message,
//   }
//   acc.push(newObj)
//   return acc
// }, [])

// const customTabs = {
//   root: {
//     borderBottom: '2px solid #e8e8e8',
//   },
//   indicator: {
//     backgroundColor: '#1890ff',
//   },
// }

// const customTab = theme => ({
//   root: {
//     textTransform: 'none',
//     minWidth: 72,
//     fontFamily: [
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       color: '#40a9ff',
//       opacity: 1,
//     },
//     '&$selected': {
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//   },
// })

// const labelArr = ['Weekly', 'Monthly']

// const tabsArr = [
//   { content:
//   <div style={{marginTop: '10px'}}>
//     <Grid container spacing={2} style={{width: '865px'}}>
//       <Grid item xs={4}>
//         <List width='100%' divider button focusSelect onItemClick={action('Item clicked: ')} data={dataSetTwo} />
//       </Grid>
//       <Grid item xs={8}>
//         <List width='100%' divider onItemClick={action('Item clicked: ')} data={dataSetThree} />
//       </Grid>
//     </Grid>
//   </div>
//   },
//   { content: <List divider data={dataSetThree} />},
// ]


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
        progressBar: newFields[i].progressBar,
        timeStatus: newFields[i].timeStatus,
        progress: newFields[i].progress,
        expand: newFields[i].expand,
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
        expand: newFields[i].expand,
        expansionDetails: 'Example expansion details written here.',
        avatar: <FolderIcon />,
        avatarVariant: newFields[i].avatarVariant,
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
  .add('Avatar Size & BgColor', () => {
    const getAvatarData = (variant, color) => {
      const modifiedData = defaultData.map((item ,i) => {
        const newFields = [
          { heading: 'Default' },
          { heading: 'Small', avatarSize: 'sm' },
          { heading: 'Medium', avatarSize: 'md' },
          { heading: 'Large', avatarSize: 'lg' },
        ]
        const newItem = {
          ...item,
          avatar: <FolderIcon />,
          avatarBgColor: color,
          avatarVariant: variant,
          heading: newFields[i].heading,
          avatarSize: newFields[i].avatarSize,
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
  .add('Button & Selected', () => {
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
      <List
        width={300}
        spacing={2}
        data={modifiedData}
        button
        onItemClick={action('clicked')}
      />
    )
  })
  .add('FocusOnSelected', () => {
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
      <List
        width={300}
        spacing={2}
        data={modifiedData}
        button
        focusOnSelected
        onItemClick={action('clicked')}
      />
    )
  })


// .add('With Divider', () => <List onItemClick={action('Item clicked: ')} divider data={[
//   { heading: 'Default View Title', details: 'Default view for secondary title' },
//   { heading: 'Default View Title', details: 'Default view for secondary title' }
// ]} />)
// .add('With Avatar', () => <List onItemClick={action('Item clicked: ')} divider data={[
//   { avatar: <FolderIcon />, heading: 'Default View Title', details: 'Default view for secondary title' },
//   { avatar: <FolderIcon />, heading: 'Default View Title', details: 'Default view for secondary title' }
// ]} />)
// .add('With Expansion', () => <List onItemClick={action('Item clicked: ')} divider data={[
//   { expand: 'start', expansionDetails: <FolderIcon />, heading: 'Default View Title', details: 'Default view for secondary title' },
//   { expand: true, expansionDetails: 'Example expansion details written here.', heading: 'Default View Title', details: 'Default view for secondary title' }
// ]} />)
// .add('With Progress Bar', () => <List onItemClick={action('Item clicked: ')} divider data={[
//   { progressBar: 30, heading: 'Default View Title', details: 'Default view for secondary title' },
//   { progressBar: 60, heading: 'Default View Title', details: 'Default view for secondary title' }
// ]} />)
// .add('With Time Status', () => <List onItemClick={action('Item clicked: ')} divider data={[
//   { timeStatus: '20m', heading: 'Default View Title', details: 'Default view for secondary title' },
//   { timeStatus: '30m', expand: true, heading: 'Default View Title', details: 'Default view for secondary title' }
// ]} />)
// .add('Combined', () => <List spacing={1} onItemClick={action('Item clicked: ')} divider data={exampleData} />)
// .add('Combined With Tabs', () => (
//   <>
//     <div style={{margin: '50px'}}>
//       <h1>Recent activity updates</h1>
//       <List onItemClick={action('Item clicked: ')} width='850px' divider data={dataSetOne}/>
//     </div>

//     <div style={{ margin: '50px', width: '850px'}}>
//       <h1 style={{ margin: '0px'}}>Recent activities by customer</h1>
//       <TabPanels
//         customStyles
//         customTabs={customTabs}
//         customTab={customTab}
//         tabLabels={labelArr}
//         tabChildren={tabsArr}
//       />
//     </div>
//   </>
// ))
// .add('With Log Object', () => <List onItemClick={action('Item clicked: ')} divider data={finalLogData} />)