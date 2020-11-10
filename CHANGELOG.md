# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

All non-core API/package changes (i.e. changes that do not affect the package delivery to the end users) will be noted under the **Non-Core** category.

## [v1.11.0] - 2020-10-22

### FEATURES

- chip - update changelog.md (c5061a1 by DoParkEQ)
- chip - margin control added (943cd3d by DoParkEQ)
- refetchdata/Tests - Add rendering test w/ snapshot (7ae78fa by Sam Sverko)
- refetchdata/Stories - Added fetch error handling. (f702664 by Sam Sverko) \* Add success story.
- refetchbutton - Add disabled state on `loading`. - Story - Add data visuals on successful fetch. (107e72a by Sam Sverko)
- refetchdata - Add interval to update lastUpdated. - Remove testing date story data. - Update CHANGELOG. (a566d4e by Sam Sverko)
- refetchdata - Add Tooltip display of last updated. - Update story to generate time difference. (0909bc6 by Sam Sverko)
- refetchdata - Handle mouse and key press. - Add sample story methods to visualize fetch data statuses. - Provide a11y visuals for focus and hover states. (bccdcaf by Sam Sverko)
- refetchdata - Remove `update` prop control [build] - Update CHANGELOG. (f96b22a by Sam Sverko)
- refetchdata - Remove get-data functionality. - Storybook - Remove react-query devtools. (1bb8c9b by Sam Sverko)
- refetchdata - Add visuals to loading & error state - Use slow mock http request url for testing. (722797e by Sam Sverko)
- deps - Add axios dep. - Add react-query-devtools to Storybook app wrapper. (70c86b8 by Sam Sverko)
- refetchdata/Stories - Added fetch error handling. (664b15c by Sam Sverko) \* Add success story.
- refetchbutton - Add disabled state on `loading`. - Story - Add data visuals on successful fetch. (2de56a7 by Sam Sverko)
- refetchdata - Add interval to update lastUpdated. - Remove testing date story data. - Update CHANGELOG. (b2a3979 by Sam Sverko)
- refetchdata - Add Tooltip display of last updated. - Update story to generate time difference. (7c16d62 by Sam Sverko)
- refetchdata - Handle mouse and key press. - Add sample story methods to visualize fetch data statuses. - Provide a11y visuals for focus and hover states. (e586a09 by Sam Sverko)
- refetchdata - Remove `update` prop control [build] - Update CHANGELOG. (9a9719f by Sam Sverko)
- refetchdata - Remove get-data functionality. - Storybook - Remove react-query devtools. (f95926d by Sam Sverko)
- refetchdata - Update test API URL. [build] (cc6fb18 by Sam Sverko)
- refetchdata - Update `fetchUrl` prop description. (a7fb7d8 by Sam Sverko)
- refetchdata - Add visuals to loading & error state - Use slow mock http request url for testing. (0ff3266 by Sam Sverko)
- refetchdata - Move component to `src`. - Export component from `index`. - Update story to reflect import from `index`. (25bca4e by Sam Sverko)
- refetchdata - Begin building component. (f7f9400 by Sam Sverko)
- deps - Add axios dep. - Add react-query-devtools to Storybook app wrapper. (5a5ee69 by Sam Sverko)
- refetchdata - Begin story to build component. (9a6053a by Sam Sverko)
- deps - Add react-query & devtools deps. (9f3eb25 by Sam Sverko)
- deps - Upgrade all minor & patch versions [build]. (26e9eff by Sam Sverko)
- changelog - Reorganize unreleased notes. (03f2e25 by Sam Sverko)
- switch - Remove prop validations [build]. (d1dfbca by Sam Sverko) \* Update story to include controls for checked and disabled states.
- changelog - Update with input additions [build]. - Update story categories for Switch, Chip, StyledRadio, & StyledSwitch. (b5b1b80 by Sam Sverko)
- chip - Re-add export in index [build]. (6ba5828 by Sam Sverko)
- switch/Tests - Write rendering test [build]. (9fcc113 by Sam Sverko)
- switch - Update story to include input label. (f12eea3 by Sam Sverko)
- switch - Add disabled state styling. (bf4352c by Sam Sverko)
- switch - Update styles to match Zeplin designs. - Update story. (285cd66 by Sam Sverko)
- switch - Create component and begin styling. - StyledSwitch - Move to deprecated status. (bda52c3 by Sam Sverko)
- radio - Add test-id. - Tests/Radio - Add basic rendering test. (fe14f2e by Sam Sverko)
- radio - Create component. - Deprecate StyledRadio. - Update stories. - Export FormControl, FormLabel, and RadioGroup from MUI. (a97d15a by Sam Sverko)
- checkbox - Begin build with custom styles. (3e1edac by Sam Sverko)
- components - Move deprecated to separate folders. (1db0988 by Sam Sverko)
- changelog - update (8e750fb by Tamires Lowande)
- list/list-item - add the option to style timeStatus typography (f021349 by Tamires Lowande)
- list/list-item - override default style for small items (640b7b6 by Tamires Lowande)
- devops/package - update tag v1.10.2-alpha (b4484f9 by Tamires)
- list/list-item - adjust style for elements to work together on small items (a877d62 by Tamires Lowande)

### UNKNOWN

- deps - Remove unused react-query packages. (d064e43 by Sam Sverko)
- refetchdata - Remove test styling. (076453f by Sam Sverko)
- refetchdata - Remove test styling. (f638756 by Sam Sverko)
- checkbox - Remove `onChange` prop type validation. (a8baca4 by Sam Sverko) \* Update story to include control details for `onChange` prop.
- checkbox - Remove redundant `disabled` prop type. (d78a59f by Sam Sverko) \* Update story to include `disabled` state control.

### CORRECTIVE

- refetchdata - Fix Alert import. (8403132 by Sam Sverko) \* Fix story components import
- theme - Fix object export. (678845f by Sam Sverko)
- theme - Fix theme object export. (dcacab5 by Sam Sverko)
- theme - Fix object export. (2d8a648 by Sam Sverko)
- theme - Fix theme object export. (a7ae916 by Sam Sverko)
- switch - Fix styling on hover. (b37d74d by Sam Sverko)
- checkbox - Fix styling. - Update Story. (aa8ed51 by Sam Sverko)

### PERFECTIVE

- refetchdata - Remove unused variable. [build] (8d6ea29 by Sam Sverko)
- checkbox - Extract checkmark SVG for easier use. (18a48af by Sam Sverko)
- tests - Checkbox - Update to reflect component (59b643e by Sam Sverko)
- checkbox - Remove redundant FormControlLabel. - Index - Export FormControlLabel and FormGroup from MUI. - Checkbox Stories - Update to show FormControl and FormGroup scenarios. (3c968d0 by Sam Sverko)
- checkbox/Tests - Write tests for component. - Checkbox - Add `testid` to component. - Update `data-table` test source. (24008fc by Sam Sverko)
- styledcheckbox - Move to deprecated status. - Checkbox - Move Story to Inputs section. (ba6f169 by Sam Sverko)

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
- `<Card>` - - Typographic mistake corrected
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
