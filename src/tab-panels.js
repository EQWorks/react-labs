import React, { useState } from 'react'
import { Tab, Tabs} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


const TabPanel = ({ children, value, index }) => value === index && children

const TabPanels = ({ tabIndex, tabLabels, tabChildren, customStyles, customTabs, customTab }) => {
  const [value , setValue] = useState(tabIndex)
  const onTabChange = (_, newVal) => setValue(newVal)
  let TabsComponent = Tabs
  let TabComponent = Tab

  if (customStyles) {
    TabsComponent = withStyles(customTabs)(Tabs)
    TabComponent = withStyles(customTab)((props) => <Tab disableRipple {...props} />)
  }

  return (
    <>
      <TabsComponent value={value} onChange={onTabChange}>
        {tabLabels.length > 0 && tabLabels.map(label => <TabComponent key={label} label={label} />)}
      </TabsComponent>

      {tabChildren.length > 0 && tabChildren.map((child, i) => <TabPanel key={i} value={value} index={i}>{child}</TabPanel>)}
    </>
  )
}

TabPanels.propTypes = {
  tabIndex: PropTypes.number,
  tabLabels: PropTypes.array,
  tabChildren: PropTypes.array,
  customStyles: PropTypes.bool,
  customTabs: PropTypes.func,
  customTab: PropTypes.func,
}

TabPanels.defaultProps = {
  tabIndex: 0,
  customStyles: false,
}

export default TabPanels