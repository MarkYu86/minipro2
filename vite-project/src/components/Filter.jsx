import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../App.css';

const decades = [
    {title:" - 1970", value:[1900,1970]},
    { title: "1970-1980", value: [1970, 1980] },
    { title: "1980-1990", value: [1980, 1990] },
    { title: "1990-2000", value: [1990, 2000] },
    { title: "2000-2010", value: [2000, 2010] },
    { title: "2010-2020", value: [2010, 2020] },
    { title: "2020- ", value: [2020, 2060] },
  ];

export default function Filter({onFilterChange}) {
    const handleTextField = (event) =>{
        event.target.select();
    }
  return (
    <div className='filter'style={{ position: 'relative', marginTop: '10px' }}>
    <Autocomplete
      options={decades}
      getOptionLabel={(option) => option.title}
      onChange={(event,newValue)=>{
        onFilterChange(newValue ? newValue.value:null);
      }}
      renderInput={(params) => (
      <TextField {...params} 
      label="Filter by Years"
      onClick={handleTextField} />)
    }
    />
    </div>
  );
}
