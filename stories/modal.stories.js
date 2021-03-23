import React, { useState } from 'react'
import { Button, Modal, Typography, ModalContainer } from '../src/index'


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
        <ModalContainer>
          <Typography>This is a modal with a styled modal container</Typography>          
        </ModalContainer>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Click</Button>
    </>
  )
}

const Template2 = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Modal 
        open={modalOpen}
        onClose={() => setModalOpen(false)}      
      >
        <div style={{ backgroundColor: '#00d455', border: '2px solid #7500DF', width: '100%', padding: 36 }}>
          <Typography>You can also style your own with div tags</Typography>               
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Click</Button>
    </>
  )
}

export const withModalContainer = Template.bind({})
export const customContainer = Template2.bind({})
