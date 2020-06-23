import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../src'


storiesOf('Card', module)
  .add('Default', () => (
    <Card cardContent={(<h3>Example Card</h3>)} cardAction={<button>Click Me</button>} />
  ))
