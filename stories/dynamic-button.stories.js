import React from 'react'

import { storiesOf } from '@storybook/react'

import { DynamicButton } from '../src'

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

storiesOf('Button', module)
  .add('Default', () => (
    <DynamicButton/>
  ))
  .add('Base', () => (
    <DynamicButton>Click</DynamicButton>
  ))
  .add('With an icon', () => (
    <DynamicButton addIcon={<CloudUploadIcon/>}>Click</DynamicButton>
  ))
  .add('With an icon on the right side', () => (
    <DynamicButton addIcon={<CloudUploadIcon/>} onWhichSide='end'>Click</DynamicButton>
  ))
  .add('Large button', () => (
    <DynamicButton addIcon={<CloudUploadIcon/>} onWhichSide='end' size='large'>Click</DynamicButton>
  ))
  .add('disabled', () => (
    <DynamicButton disabled={true} addIcon={<CloudUploadIcon/>} onWhichSide='end' size='large'>Click</DynamicButton>
  ))