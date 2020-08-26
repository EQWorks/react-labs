import React, { useState, useEffect } from 'react'
import MUISkeleton from '@material-ui/lab/Skeleton'

import { Button, Loader } from '../src/index'

const skeletonConfig = (
  <div>
    <MUISkeleton variant='rect' width={100} height={40} />
  </div>
)

export default {
  title: 'Feedback/Loader',
  component: Loader,
  args: {
    automatic: false,
    message: 'Loading...',
  },
  argTypes: {
    automatic: {
      defaultValue: false,
      description: 'Toggle demonstration loading times for component.',
      table: {
        type: { summary: 'boolean' },
      },
      type: 'boolean',
    },
    skeletonConfig: {
      control: null,
    },
  },
}

const Template = (args) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(
      () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
      800,
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <Loader progress={(args.automatic) ? progress : 0} {...args} />
  )
}

const TemplateWrapper = (args) => {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(
      () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
      800,
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <Loader open={open} progress={(args.automatic) ? progress : 0} {...args} >
      <Button
        disabled={open}
        isLoading={open}
        onClick={() => setOpen(true)}
      >
        Click Me
      </Button>
    </Loader>
  )
}

const TemplateSkeleton = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(
      () => setProgress((prev) => (prev >= 100 ? 0 : prev + 10)),
      800,
    )
    return () => clearInterval(timer)
  }, [])
  return (
    <Loader open={progress < 50} skeletonConfig={skeletonConfig}>
      <Button>Click Me</Button>
    </Loader>
  )
}

export const Circular = Template.bind({})

Circular.args = {
  action: 'circular',
  backdrop: true,
  open: true,
}

Circular.argTypes = {
  action: {
    control: {
      options: [
        'circular',
        'circular determinate',
        'circular determinate label',
      ],
      type: 'select',
    },
    type: { name: 'select', required: true },
  },
  children: {
    control: null,
  },
}

// ===

export const Linear = Template.bind({})

Linear.args = {
  action: 'linear',
  backdrop: true,
  open: true,
}

Linear.argTypes = {
  action: {
    control: {
      options: [
        'linear',
        'linear buffer',
        'linear buffer label',
        'linear determinate',
        'linear determinate label',
      ],
      type: 'select',
    },
    type: { name: 'select', required: true },
  },
  children: {
    control: null,
  },
}

// ===

export const Wrapper = TemplateWrapper.bind({})

Wrapper.args = {
  action: 'circular',
}

Wrapper.argTypes = {
  action: {
    control: {
      options: [
        'circular',
        'circular determinate',
        'circular determinate label',
      ],
      type: 'select',
    },
    type: { name: 'select', required: true },
  },
  backdrop: {
    control: null,
  },
  children: {
    control: null,
  },
  open: {
    control: null,
  },
}

// ===

export const Skeleton = TemplateSkeleton.bind({})

Skeleton.parameters = {
  controls: { hideNoControlsWarning: true },
}
