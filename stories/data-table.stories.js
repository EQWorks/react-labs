import React from 'react'

import { storiesOf } from '@storybook/react'

import { DataTable } from '../src'

const data = [
  {new_cases: 527, total_cases: 15383, province: "Ontario", rate: 4},
  {new_cases: 50, total_cases: 1998, province: "British Columbia", rate: 3},
  {new_cases: 27, total_cases: 900, province: "Nova Scotia", rate: 3},
  {new_cases: 1, total_cases: 272, province: "Manitoba", rate: 0},
  {new_cases: 216, total_cases: 4696, province: "Alberta", rate: 5},
  {new_cases: 12, total_cases: 365, province: "Saskatchewan", rate: 3},
  {new_cases: 875, total_cases: 24982, province: "Quebec", rate: 4},
  {new_cases: 1, total_cases: 258, province: "Newfoundland", rate: 0},
  {new_cases: 2, total_cases: 11, province: "Yukon", rate: 22},
  {new_cases: 1, total_cases: 118, province: "New Brunswick", rate: 1},
  {new_cases: 1, total_cases: 26, province: "PEI", rate: 4},
  {new_cases: 1, total_cases: 5, province: "Northwest Territories", rate: 25},
]

storiesOf('DataTable', module)
  .add('Default', () => (
    <DataTable/>
  ))
  .add('With Data', () => (
    <DataTable data={data}/>
  ))
