# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## Added
- `<Table />` - `react-table` compatible selection filter implementation.

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
