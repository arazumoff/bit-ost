import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ModalPost = ({onSave}) => {
  const [show, setShow] = useState(false)
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onSaveForm = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (!form.checkValidity()) {
      event.stopPropagation()
    } else {
      onSave && onSave(formData)
      handleClose()
    }
    setValidated(true)
    return
  }

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]: value})
  }

  return(
    <>
      <Button onClick={handleShow}>
        Add post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={onSaveForm} id="postForm">
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                required 
                type="text" 
                name="title"
                placeholder="Post title" 
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter title.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control 
                required 
                type="text" 
                name="body"
                placeholder="Post body" 
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter body.
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="postForm">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalPost
