# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

All non-core API/package changes (i.e. changes that do not affect the package delivery to the end users) will be noted under the **Non-Core** category.

## [Unreleased]
### Fixed
- `<ListItem>` - Another fix in timeStatus alignment/style for small items in harmony with the typography

### Added
- `<ListItem>` - `timeStatusStyle` key:value can be added to `data` param to apply style to the timeStatus element, now inside

```
<Typography
  component={'span'}
  {...timeStatusStyle}
>
  {timeStatus}
</Typography>
```

## [1.10.1] - 2020-10-07
### Fixed
- `<ListItem>` - Fixed status alignment style for small items.

## [1.10.0] - 2020-10-01
### Added
- `<ThemeProvider>` - Added custom `ThemeProvider` that uses `react-labs` theme by default.
- `Theme` - Subtitle and body variations added.
- `<Chip>` - Added component.
- `<RefetchData>` - Added component to display data-fetching statuses and last updated fetch.

### Fixed
- `<DefaultTheme>` - Fixed theme object export.
- `<Typography />` - Fixed children prop-type typo.
- `<Typography />` - secondary color configuration prop added.
- `Theme` - DefaultTheme not found warning fixed.
- `<StyledCardContainer/>` - Fixed backgorund image ratio to adjust to any type of image.

## [1.9.0] - 2020-09-11
### Added
- `<Table />` - sortTypes to be case insensitive by using `sortType: 'caseInsensitive'` in columns object

### Fixed
- `<Table />` - `overflow: 'visible` override pagination style to avoid horizontal scroll
- `Peer Dependency` - Fixed missing `@material-ui` as a peer dependency.

## [1.8.1] - 2020-09-10
### Added
- `Theme` - Added theme config export.
- `<Typography>` - Added component with `marginBottom`.

### Non-Core
- `Theme` - Typography story shows all variants.
- `Theme` - Shadow story shows all variants.

## [1.8.0] - 2020-09-02
### Added
- `<Button>` - `noSpacing` prop added, which removes paddings from its base when `true`.
- `<DynamicButton>` - `noSpacing` prop added, which removes paddings from its base when `true`.

### Changed
- `<Table />` - lighter impl on unspecified `remember.key` prop.
- `<StyledCardContainer />` - spread operator prop added, which enables component styling externally.
- `<DynamicButton>` - hover state color changed.
- `<StyledRadio>` - hover state color changed.

### Fixed
- `<WidgetStats />` - Fix handling of 0/0 calculations.
- `<Table />` - per-column initial hidden state on no-accessor columns.

### Non-Core

#### Added
- `<Button>` - Story created, to eventually replace `<DynamicButton>` story.
- `/src/theme` - Created theme override files for global styling.
- `<Shadow>` - Story created.
- `<Typography>` - Story created.
- `theme/color` - Story created.

#### Changed
- `README` - Updated with details on installation and usage.
- `Storybook` - Updated dependencies, and added Story controls to all components.
- `Linting` - Updated ESLint configuration.

#### Removed
- `<ThemeProvider>` - Removed Material UI theme option select.

## [1.7.2] - 2020-08-07
### Fixed
- `<Table />` - table can now update based on dinamically sortBy

## [1.7.0] - 2020-07-22
### Added
- `<ImageSlider>` - - LinkTo prop added
- `<List>` - - component added for home & marketplace list view
- `<TabPanels>` - - component added with custom Tab & Tabs style option

## [1.6.0] - 2020-07-15
### Added
- `<StyledCardContainer>` - - toggle function added with a storybook example

### Changed
- `<Carousel>` - - responsive sizing mechanism added
- `<Table>` - - custom filter passing mechanism added with a storybook example
- `<Card>` - -  Typographic mistake corrected
- Storybook theme switcher logic revised

## [1.5.0] - 2020-07-10
### Added
- `<Alert>` - - component added with examples.
- `<Card>` - - component added with examples.
- `<Textfield>` - - component added with examples.
- `<Loader>` - - component added with examples.

## [1.4.1] - 2020-07-09
### Changed
- export Carousel and a few other components from root level

## [1.4.0] - 2020-07-08
### Added
- `<Carousel/>` - component added with examples.
- `<ImageSlider/>` - component added with examples.

## [1.3.0] - 2020-07-06
### Fixed
- `<Table />` - fix initial per-col hidden, and table-wise hiddenColumns, a regression from v1.2.0.

### Changed
- `<Table />` - hide pagination when filtered & page size can show all filtered.
- `<Table />` - pagination count number of possibly filterd rows.
- `<DynamicButton />` - Internal prop process logic is revised.

### Added
- `<StyledCardContainer/>` - component added with examples.

## [1.2.0] - 2020-06-30
### Added
- `<Table />` - additional download options to reflect filtered rows.
- `<Table />` - show dot badge for download when options are allowed.
- `<Table />` - localStorage based caching mechanism to remember user preference of column visibility and sort by.

## [1.1.3] - 2020-06-29
### Fixed
- `themes` fix import path for `<DynamicButton />`, `<StyledCheckbox />` and `<StyledRadio />`.

## [1.1.1] - 2020-06-25
### Changed
- `themes` split palette and typography into default and extended ones.
- `themes` directly enforce themes at component level for `<DynamicButton />`, `<StyledCheckbox />` and `<StyledRadio />`.

### Fixed
- `<StyledCheckbox />` and `<StyledRadio />` crashes due to lack of themes enforcement.

## [1.1.0] - 2020-06-24
### Added
- `<Table />` - `react-table` compatible selection filter implementation.
- `<Table />` - `react-table` compatible range filter implementation.

## [1.0.0] - 2020-06-22
### Added
- `<Table />` - initial `sortBy` property for specifying one (Object) or multiple (Array of Objects) column sorting.

### Changed
- `<Table />` hide toolbar when no title and no data.
- `<Table />` Edit columns list with a maxHeight for in-list scroll.

### Removed
- **BREAKING** `<Table />` - remove `title` property.

## [0.7.0] - 2020-06-18
### Added
- `<Table />` `hiddenColumns` (Array of String, default empty) property and per-`<Table.Column />` `hidden` (Boolean, logically default `false`) property for configuring tables with initially hidden columns. When any per-column `hidden` property is true (technically, truthy), table-wise `hiddenColumns` property is ignored.
- `<Table />` per-column value filter, default to `filters.DefaultFilter`.
- `<Table />` `title` property.

### Changed
- `<Table />` use custom `<TableSortLabel />` instead of the native MUI one for different design.
- `<Table />` rename "Filter columns" to "Edit table", add dot badge to indicate togglable hidden columns.
- `<Table />` refactor table toolbar search as `filters.DefaultFilter`.
- `<Table />` sort and filter indicators are more prominent when in-effect.

## [0.6.2] - 2020-06-15
### Added
- `<Table />` component, based on `react-table` hooks and MUI Table components. Deprecating `<DataTable />` and `<DynamicDataTable />` components.

## [0.5.1] - 2020-05-15
### Added
- Patch to export the component DynamicDataTable
- Add Jest snapshot tests

## [0.5.0] - 2020-05-15
### Added
- DynamicDataTable component to re-render when data is sent dynamically.
- Section about "CHANGELOG" to keep track of changes.

### Changed
- data-table storybook file to keep the default version clean as suggested
