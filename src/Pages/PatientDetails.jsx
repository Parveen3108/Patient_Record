import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function PatientDetails({ show, onHide, patient }) {
  return (
    <div className="ml-4">
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Patient Details
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {patient ? (
            <>
              <h4>{patient.name}</h4>
              <p>
                <strong>Age:</strong> {patient.age}
              </p>
              <p>
                <strong>Contact:</strong> {patient.contact}
              </p>
              <p>
                <strong>Address:</strong> {patient.address}
              </p>
              <p>
                <strong>Diagnosis:</strong> {patient.diagnosis}
              </p>
            </>
          ) : (
            <p>No patient selected.</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
