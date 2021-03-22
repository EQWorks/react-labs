import React, { useState } from 'react'
import { Button, Modal } from '../src/index'

export default {
  title: 'Data display/Modal',
  component: Modal,
}

const Template = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Modal 
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Click</Button>
    </>
  )
}

export const Default = Template.bind({})

// ===
