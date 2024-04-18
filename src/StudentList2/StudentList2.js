import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Select, 
  MenuItem, 
  Button, 
  TextField 
} from '@mui/material';
import './StudentList2.css'; 
import StudentDetails from './StudentDetails/StudentDetails';
import IconButton from '@mui/material/IconButton';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import ToggleColorMode from '../sign-in-side/ToggleColorMode';

function StudentList2() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); 
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const students = [
    { id: 1, level: 'High School', class: '10th Grade', grade: 'A', predictions: [{ label: 'Math', probability: 'High' }, { label: 'Science', probability: 'Low' }] },
    { id: 2, level: 'Middle School', class: '8th Grade', grade: 'B', predictions: [{ label: 'Math', probability: 'Medium' }, { label: 'Science', probability: 'Medium' }] },
    { id: 3, level: 'High School', class: '11th Grade', grade: 'B+', predictions: [{ label: 'Math', probability: 'Low' }, { label: 'Science', probability: 'High' }] },
    // Add more student data here
  ];

  const handleOpenStudentDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseStudentDetails = () => {
    setSelectedStudent(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const handleRowClick = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
      );
    }

    setSelectedRows(newSelected);
  };

  const handleExpandRow = (id) => {
    const isExpanding = isRowExpanded(id);
    setExpandedRows(isExpanding ? [] : [id]);
    setSelectedStudent(isExpanding ? null : students.find(student => student.id === id));
  };

  const isRowExpanded = (id) => expandedRows.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, students.length - page * rowsPerPage);

  // Filtered students based on search query and filters
  const filteredStudents = students.filter(student => {
    const levelMatch = filterLevel ? student.level === filterLevel : true;
    const classMatch = filterClass ? student.class === filterClass : true;
    const gradeMatch = filterGrade ? student.grade === filterGrade : true;
    const searchMatch = searchQuery ? 
      student.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toString().toLowerCase() === searchQuery.toLowerCase() 
      : true;
    return levelMatch && classMatch && gradeMatch && searchMatch;
  });

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="header">
          <h1 className="text-2xl font-semibold mb-4">Student List</h1>
        </div>
        <div className="search-banner">
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            displayEmpty
            className="filter-select"
          >
            <MenuItem value="">All Levels</MenuItem>
            {/*  options for levels */}
          </Select>
          <Select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            displayEmpty
            className="filter-select"
          >
            <MenuItem value="">All Classes</MenuItem>
            {/*  options for classes */}
          </Select>
          <Select
            value={filterGrade}
            onChange={(e) => setFilterGrade(e.target.value)}
            displayEmpty
            className="filter-select"
          >
            <MenuItem value="">All Grades</MenuItem>
            {/*  options for grades */}
          </Select>
          <Button variant="contained" color="primary" className="predict-button">Predict</Button>
        </div>
        <div className='studenttable'>
          <TableContainer component={Paper}>
            <Table aria-label="Student List">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell className='studentId'>Student ID</TableCell>
                  <TableCell className='level'>Level</TableCell>
                  <TableCell className='class'>Class</TableCell>
                  <TableCell className='grade'>Grade</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredStudents
                  ).map((student) => {
                    const isItemSelected = isSelected(student.id);
                    const isExpanding = isRowExpanded(student.id);
                    return (
                      <React.Fragment key={student.id}>
                        <TableRow
                          hover
                          onClick={(event) => handleRowClick(event, student.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={student.id}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <input type="checkbox" checked={isItemSelected} onChange={() => {}} />
                          </TableCell>
                          <TableCell>{student.id}</TableCell>
                          <TableCell className='level'>{student.level}</TableCell>
                          <TableCell>{student.class}</TableCell>
                          <TableCell className='grade'>{student.grade}</TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handleExpandRow(student.id)}
                              color={isExpanding ? "secondary" : "primary"}
                              size="small"
                            >
                              {isExpanding ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        {isExpanding && (
                          <TableRow key={`${student.id}-expanded`}>
                            <TableCell colSpan={6}>
                              <StudentDetails student={student} />
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="pagination">
          <div className="pagination-rows-per-page">
            <span>Rows per page</span>
            <Select value={rowsPerPage} onChange={handleChangeRowsPerPage} variant="outlined" className="pagination-select">
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </div>
          <div className="pagination-navigation">
            <span>{page * rowsPerPage + 1}-{Math.min(page * rowsPerPage + rowsPerPage, filteredStudents.length)} of {filteredStudents.length}</span>
            <Button onClick={() => handleChangePage(null, page - 1)} disabled={page === 0} variant="contained" className="pagination-button">Previous</Button>
            <Button onClick={() => handleChangePage(null, page + 1)} disabled={page >= Math.ceil(filteredStudents.length / rowsPerPage) - 1} variant="contained" className="pagination-button">Next</Button>
          </div>
        </div>
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
      </div>
    </div>
  );
}

export default StudentList2;
