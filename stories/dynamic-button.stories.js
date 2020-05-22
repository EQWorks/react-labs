import React from 'react'

import { storiesOf } from '@storybook/react'

import { DynamicButton } from '../src'

import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const arr = [
  {
    type: 'primary',
    size: 'large',
  },
  {
    type: 'secondary',
    size: 'medium',
  },
  {
    type: 'tertiary',
    size: 'small',
  }
];

storiesOf('Button', module)
  .add('Default', () => (
    <DynamicButton/>
  ))
  .add('Types', () => (
    <div>
      {arr.map(({type}, index) =><DynamicButton key={index} type={type}>{type}</DynamicButton>)}
    </div>
  ))
  .add('With an icon', () => (
    <div>
      {arr.map(({type}, index) => <DynamicButton key={index} type={type} addIcon={<CloudUploadIcon/>}>Click</DynamicButton>)}
    </div>
  ))
  .add('With an icon on the right side', () => (
    <div>
      {arr.map(({type}, index) => <DynamicButton key={index} type={type} addIcon={<CloudUploadIcon/>} onWhichSide='end'>Click</DynamicButton>)}
    </div>
  ))
  .add('Size', () => (
    <div>
      {arr.map(({type, size}, index) => <DynamicButton key={index} type={type} addIcon={<CloudUploadIcon/>} onWhichSide='end' size={size}>Click</DynamicButton>)}
    </div>
  ))
  .add('disabled', () => (
    <div> 
      {arr.map(({type}, index) => <DynamicButton key={index} type={type} disabled={true} addIcon={<CloudUploadIcon/>} onWhichSide='end' size='large'>Click</DynamicButton>)}
    </div>  
  ))