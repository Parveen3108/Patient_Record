import React, { useState } from "react";
import PatientDetails from "./PatientDetails";
import Button from "react-bootstrap/Button";

export default function Patient() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen,setIsOpen]=useState(false)

  // patients list ko state me rakha (taaki add/delete ho sake)
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      age: 45,
      contact: "+91-9876543210",
      address: "Delhi, India",
      diagnosis: "Diabetes",
    },
    {
      id: 2,
      name: "Neha Verma",
      age: 32,
      contact: "+91-9123456780",
      address: "Mumbai, India",
      diagnosis: "Asthma",
    },
    {
      id: 3,
      name: "Rohit Singh",
      age: 28,
      contact: "+91-9001234567",
      address: "Lucknow, India",
      diagnosis: "Hypertension",
    },
  ]);

  // new patient ke liye state
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
    diagnosis: "",
  });

  // search filter
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // add patient function
  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.contact) {
      alert("Please fill in Name, Age, and Contact!");
      return;
    }else{
    setIsOpen(false)
    }

    const newEntry = {
      ...newPatient,
      id: patients.length + 1,
    };

    setPatients([...patients, newEntry]); 
    setNewPatient({ name: "", age: "", contact: "", address: "", diagnosis: "" });
  };

  return (
    <div className="p-4">
      {/* Search + Add button */}
      <div className="flex justify-between mb-4">
        <input
          type="search"
          placeholder="Search the Patient name"
          className="border p-2 rounded w-full max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <button
      className="bg-blue-500 px-2 rounded text-white"
        onClick={()=>setIsOpen(true)}
        >AddPatient</button>
     
      </div>

      {/* Add Patient Form */}
     {isOpen&&( <div className="flex flex-col gap-2 mb-6 border p-4 rounded bg-gray-50">
        <h3 className="font-bold mb-2">Add New Patient</h3>
        <label>Name:</label>
        <input
          type="text"
          className="border p-2"
          placeholder="Enter Name"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="number"
          className="border p-2"
          placeholder="Enter Age"
          value={newPatient.age}
          onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
        />

        <label>Contact:</label>
        <input
          type="text"
          className="border p-2"
          placeholder="Enter Contact"
          value={newPatient.contact}
          onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
        />

        <label>Address:</label>
        <input
          type="text"
          className="border p-2"
          placeholder="Enter Address"
          value={newPatient.address}
          onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
        />

        <label>Diagnosis:</label>
        <input
          type="text"
          className="border p-2"
          placeholder="Enter Diagnosis"
          value={newPatient.diagnosis}
          onChange={(e) => setNewPatient({ ...newPatient, diagnosis: e.target.value })}
        />

        <button
          onClick={handleAddPatient}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>)}

      {/* Patients Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr className="text-center">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.id} className="text-center">
                <td className="border border-gray-300 p-2">{patient.name}</td>
                <td className="border border-gray-300 p-2">{patient.age}</td>
                <td className="border border-gray-300 p-2">{patient.contact}</td>
                <td className="border border-gray-300 p-2">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSelectedPatient(patient);
                      setModalShow(true);
                    }}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                No patients found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for details */}
      <PatientDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        patient={selectedPatient}
      />
    </div>
  );
}
