import React, { useState } from 'react'

export default function AddPatient() {
  const [newPatient,setNewPatient]= useState("")



  const handleAddPatient=()=>{
    
  }




  return (
    <div>
      <div className="flex flex-col gap-2 mb-6 border p-4 rounded bg-gray-50">
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
      </div>
    </div>
  )
}
