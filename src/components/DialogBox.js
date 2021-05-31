import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DialogBox = ({ title, body, button, buttonVariant, action, show, setShow }) => {
  
    const handleClose = () => setShow(false);
    const confirmHandler = () => {
        action();
        setShow(false);
    }
  
    return (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {body}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant={buttonVariant} onClick={confirmHandler}>{button}</Button>
          </Modal.Footer>
        </Modal>
    );
  };

  export default DialogBox;