import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import './StudentDetails.css';

function StudentDetails({ student }) {
  if (!student) {
    return null;
  }

  return (
    <TableRow>
      {/* Student Details */}
      <TableCell>
        <div className="details-container">
          <h3 className="heading">Student Details</h3>
          <p>Student ID: {student.id}</p>
          <p>Level: {student.level}</p>
          <p>Class: {student.class}</p>
          <p>Grade: {student.grade}</p>
        </div>
      </TableCell>

      {/* Predictions */}
      <TableCell>
        <div className="details-container">
          <h3 className="heading">Predictions</h3>
          <ul className="prediction-list">
            {student.predictions && Array.isArray(student.predictions) ? (
              student.predictions.map((prediction, index) => (
                <li key={index} className="prediction-item">
                  {prediction.label}: {prediction.probability}
                </li>
              ))
            ) : (
              <li className="prediction-item">No predictions available</li>
            )}
          </ul>
        </div>
      </TableCell>

      {/* Explainability */}
      <TableCell>
        <div className="details-container">
          <h3 className="heading">Explainability</h3>
          {/* <img src={student.explainabilityImage} alt="Explainability Image" /> */}
        </div>
      </TableCell>
    </TableRow>
  );
}

export default StudentDetails;
