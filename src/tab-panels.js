import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Tab, Tabs } from '@material-ui/core'


const useStyles = makeStyles({
  vertical: {
    flexGrow: 1,
    display: 'flex',
  },
})

const TabPanel = ({ children, value, index }) => value === index && children

const TabPanels = ({
  tabIndex,
  tabLabels,
  tabChildren,
  customTabs,
  customTab,
  TabsProps,
  TabProps,
  onChange: controlledOnChange,
  value: controlledValue,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(tabIndex)
  const onTabChange = (_, newVal) => setValue(newVal)
  let TabsComponent = Tabs
  let TabComponent = Tab

  if (customTabs) TabsComponent = withStyles(customTabs)(Tabs)
  if (customTab)
    TabComponent = withStyles(customTab)((props) => (
      <Tab disableRipple {...props} />
    ))

  return (
    <div className={classes[TabsProps.orientation]}>
      <TabsComponent
        value={controlledValue !== null ? controlledValue: value}
        onChange={(e, newVal) => {
          onTabChange(e, newVal)
          controlledOnChange(e, newVal)
        }}
        {...TabsProps}
      >
        {tabLabels.length > 0 &&
          tabLabels.map((label, i) => <TabComponent key={`${label}-${i}`} label={label} {...TabProps} />)}
      </TabsComponent>
      {tabChildren.length > 0 &&
        tabChildren.map((child, i) => (
          <TabPanel key={i} value={controlledValue !== null ? controlledValue: value} index={i}>
            {child.content || child}
          </TabPanel>
        ))}
    </div>
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
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

TabPanels.defaultProps = {
  customTab: null,
  customTabs: null,
  tabChildren: [],
  tabIndex: 0,
  tabLabels: [],
  TabsProps: {},
  TabProps: {},
  onChange: () => {},
  value: null,
}

export default TabPanels
