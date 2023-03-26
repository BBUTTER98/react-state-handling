import { useState } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState('Hi Guest');
  const [displayedMail, setDisplayedMail] = useState('');
  const [data,setData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const handleChange = (event) =>{
    const {name, value} = event.target;
    setData(prev =>{
      switch(name){
        case 'fName':
          return{
            firstName: value,
            lastName: prev.lastName,
            email: prev.email
          }
        case 'lName':
          return{
            firstName: prev.firstName,
            lastName: value,
            email: prev.email
          }
        case 'email':
          return{
            firstName: prev.firstName,
            lastName: prev.lastName,
            email: value
          }
          default:
            return{
              firstName: '',
              lastName: '',
              email: ''
            }
      }
    })
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const {firstName, lastName, email} = data;
    setText(`Hi ${firstName} ${lastName}`);
    setDisplayedMail(email);
    setData({
      firstName: '',
      lastName: '',
      email: ''
    })
  }
  return (
      <form
        onSubmit={handleSubmit}
      >
      <h1>{text}</h1>
      <h2>{displayedMail}</h2>
      <input type="text" name='fName' value={data.firstName} onChange={handleChange} placeholder='First Name'/><br />
      <input type="text" name='lName' value={data.lastName} onChange={handleChange} placeholder='Last Name'/><br />
      <input type="text" name='email' value={data.email} onChange={handleChange} placeholder='Email'/><br />
      <button type="submit">Display data</button>
      </form>
  );
}

export default App;
