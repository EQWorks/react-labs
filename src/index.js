import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import defaultTheme from '../src/theme/index'

import AlertComponent from './alert'
import ButtonComponent from './button'
import CardComponent from './card'
import CarouselComponent from './image-slider/carousel'
import DataTableComponent from './data-table' // deprecated by Table
import DynamicButtonComponent from './dynamic-button'
// export { default as DynamicDataTable } from './dynamic-data-table' // deprecated by Table
import ImageSliderComponent from './image-slider'
import ListComponent from './list'
import LoaderComponent from './loader'
import QuickFiltersComponent from './quick-filters'
import StyledCardContainerComponent from './styled-card-container'
import StyledCheckboxComponent from './styled-checkbox'
import StyledRadioComponent from './styled-radio'
import StyledSwitchComponent from './styled-switch'
// import TableComponent from "./table";
export { default as Table } from './table'
import TabPanelsComponent from './tab-panels'
import TextFieldComponent from './text-field'
import WidgetStatsComponent from './widget-stats'
// export { default as WidgetNumber } from './widget-number' // deprecated by WidgetStats
// export { default as WidgetTrend } from './widget-trend' // deprecated by WidgetStats
import SelectionGroupComponent from './selection-group'

const wrapTheme = (WrappedComponent, theme = defaultTheme) => {
  class Wrapper extends React.PureComponent {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      )
    }
  }
  return Wrapper
}

const Alert = wrapTheme(AlertComponent)
const Button = wrapTheme(ButtonComponent)
const Card = wrapTheme(CardComponent)
const Carousel = wrapTheme(CarouselComponent)
const DataTable = wrapTheme(DataTableComponent)
const DynamicButton = wrapTheme(DynamicButtonComponent)
const ImageSlider = wrapTheme(ImageSliderComponent)
const List = wrapTheme(ListComponent)
const Loader = wrapTheme(LoaderComponent)
const QuickFilters = wrapTheme(QuickFiltersComponent)
const StyledCardContainer = wrapTheme(StyledCardContainerComponent)
const StyledCheckbox = wrapTheme(StyledCheckboxComponent)
const StyledRadio = wrapTheme(StyledRadioComponent)
const StyledSwitch = wrapTheme(StyledSwitchComponent)
// const Table = wrapTheme(TableComponent);
const TabPanels = wrapTheme(TabPanelsComponent)
const TextField = wrapTheme(TextFieldComponent)
const WidgetStats = wrapTheme(WidgetStatsComponent)
const SelectionGroup = wrapTheme(SelectionGroupComponent)

export {
  Alert,
  Button,
  Card,
  Carousel,
  DataTable,
  DynamicButton,
  ImageSlider,
  List,
  Loader,
  QuickFilters,
  StyledCardContainer,
  StyledCheckbox,
  StyledRadio,
  StyledSwitch,
  // Table,
  TabPanels,
  TextField,
  WidgetStats,
  SelectionGroup,
}
