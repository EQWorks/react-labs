import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Tab, Tabs } from '@material-ui/core'

const TabPanel = ({ children, value, index }) => value === index && children

const TabPanels = ({
  tabIndex,
  tabLabels,
  tabChildren,
  customTabs,
  customTab,
  TabsProps,
  TabProps,
}) => {
  const [value, setValue] = useState(tabIndex)
  const onTabChange = (_, newVal) => setValue(newVal)
  let TabsComponent = Tabs
  let TabComponent = Tab

  if (customTabs) TabsComponent = withStyles(customTabs)((props) => <Tabs {...props} />)
  if (customTab)
    TabComponent = withStyles(customTab)((props) => (
      <Tab disableRipple {...props} />
    ))

  return (
    <>
      <TabsComponent value={value} onChange={onTabChange} {...TabsProps}>
        {tabLabels.length > 0 &&
          tabLabels.map((label) => <TabComponent key={label} label={label} {...TabProps} />)}
      </TabsComponent>
      {tabChildren.length > 0 &&
        tabChildren.map((child, i) => (
          <TabPanel key={i} value={value} index={i}>
            {child.content || child}
          </TabPanel>
        ))}
    </>
  )
}

TabPanels.propTypes = {
  /**
    * The styling of the component tab.
  */
  customTab: PropTypes.any,
  /**
    * The styling of the component tabs.
  */
  customTabs: PropTypes.any,
  /**
    * The content of the component tabs.
  */
  tabChildren: PropTypes.array,
  /**
    * The selected tab of the component.
  */
  tabIndex: PropTypes.number,
  /**
    * The tab labels of the component tabs.
  */
  tabLabels: PropTypes.array,
  TabsProps: PropTypes.object,
  TabProps: PropTypes.object,
}

TabPanels.defaultProps = {
  customTab: null,
  customTabs: null,
  tabChildren: [],
  tabIndex: 0,
  tabLabels: [],
  TabsProps: {},
  TabProps: {},
}

export default TabPanels
