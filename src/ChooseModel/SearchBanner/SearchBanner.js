import React, { useState } from 'react';
import { Select, MenuItem, Button,TextField } from '@material-ui/core';
import './SearchBanner.css';

function SearchBanner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterModel, setFilterModel] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLevelChange = (e) => {
    setFilterLevel(e.target.value);
  };

  const handleYearChange = (e) => {
    setFilterYear(e.target.value);
  };

  const handleModelChange = (e) => {
    setFilterModel(e.target.value);
  };

  const handlePredictClick = () => {
    
  
    console.log('Selected level:', filterLevel);
    console.log('Selected year:', filterYear);
    console.log('Selected model:', filterModel);
  };

  return (
    <div className="search-banner">
     
      <Select
        value={filterLevel}
        onChange={handleLevelChange}
        displayEmpty
        className="filter-select"
      >
        <MenuItem value="">Select Level</MenuItem>
        <MenuItem value="7th grade">7th grade</MenuItem>
        <MenuItem value="8th grade">8th grade</MenuItem>
        <MenuItem value="9th grade">9th grade</MenuItem>
      </Select>
      <Select
        value={filterYear}
        onChange={handleYearChange}
        displayEmpty
        className="filter-select"
      >
        <MenuItem value="">Select Year</MenuItem>
        <MenuItem value="After 1 Year">After 1 Year</MenuItem>
        <MenuItem value="After 2 Years">After 2 Years</MenuItem>
      </Select>
      <Select
        value={filterModel}
        onChange={handleModelChange}
        displayEmpty
        className="filter-select"
      >
        <MenuItem value="">Choose Model</MenuItem>
        <MenuItem value="ML1">ML1</MenuItem>
        <MenuItem value="ML2">ML2</MenuItem>
        <MenuItem value="LLM1">LLM1</MenuItem>
      </Select>
      <div className="button-predict">
        <Button variant="contained" color="primary" onClick={handlePredictClick}>
          Predict
        </Button>
      </div>
    </div>
  );
}

export default SearchBanner;
