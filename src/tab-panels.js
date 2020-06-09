import React, { useState } from 'react'
import { Tab, Tabs} from '@material-ui/core'
import PropTypes from 'prop-types'


const TabPanel = ({ children, value, index }) => value === index && children

const TabPanels = ({ tabIndex=0, tabLabels, tabChildren }) => {
  const [value , setValue] = useState(tabIndex)
  const onTabChange = (_, newVal) => setValue(newVal)

  return (
    <>
      <Tabs value={value} onChange={onTabChange}>
        {tabLabels.length > 0 && tabLabels.map(label => <Tab key={label} label={label} />)}
      </Tabs>

      {tabChildren.length > 0 && tabChildren.map((child, i) => <TabPanel key={i} value={value} index={i}>{child}</TabPanel>)}
    </>
  )
}

TabPanels.propTypes = {
  tabIndex: PropTypes.number,
  tabLabels: PropTypes.array,
  tabChildren: PropTypes.array,
}

TabPanels.defaultProps = {
  tabIndex: 0,
}

export default TabPanels