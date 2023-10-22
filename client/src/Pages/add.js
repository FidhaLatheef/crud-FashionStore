import React, { useState } from 'react';
import axios from 'axios';



function Add() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');

  const handleAddition = (e) => {
    e.preventDefault();

    //const result = Number(num1) + Number(num2);
   // setSum(result);

    const data={
        num1:num1,
        num2:num2,
        sum:sum,
    }

    axios.post('http://localhost:8000/sum',data)
    .then(function (response) {    
      setSum(response.data.sum)
       console.log(response);
    })

    .catch(function (error) {    
      console.log(error);
    })
  };

  return (
    <div>
      <form onSubmit={handleAddition} style={formContainerStyle}>

        <label >First Number</label>
        <input type="number" name="number1" value={num1} onChange={(e) => setNum1(e.target.value)} style={inputStyle} />      

        <label>Second Number</label>
        <input type="number" name="number2" value={num2} onChange={(e) => setNum2(e.target.value)} style={inputStyle} />
    
        <button type="submit" style={buttonStyle}>Add</button>
        <br />

        <label >Sum</label>
        <input type="number" name="sum" value={sum} readOnly style={inputStyle} />

      </form>
    </div>
  );
}

export default Add;


const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    margin: '0 auto',
    marginTop: '200px',
  };
 
const inputStyle = {
  marginBottom: '10px',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '5px 10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

