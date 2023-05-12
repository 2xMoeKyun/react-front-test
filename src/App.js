import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home';
import Form from './components/Form';
import TableRow from './components/TableRow';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios'



export default function App() {

  const queryParameters = new URLSearchParams(window.location.search)
  const name = queryParameters.get("name")
  const card = queryParameters.get("card")
  const phone = queryParameters.get("phone")
  const problem = queryParameters.get("problem")

  var patients = [
    {
      "name": "Alex Vas Obevan",
      "card": "2176586",
      "phone": "+7924326746",
      "problem": "Brain damage"
    },
    {
      "name": "Alefdsg van",
      "card": "2176586",
      "phone": "+7924326746",
      "problem": "BASFdsFsdfds"
    }
  ];

  function Mote() {
    window.location.href = 'http://localhost:3000/form';
  }

  // useEffect(() => {

  //   patients.push({
  //     "name": name,
  //     "card": card,
  //     "phone": phone,
  //     "problem": problem
  //   });
  //   console.log(patients)
  // }, []);

  function Foo(){
    console.log('foo');
    patients.push({
      "name": name,
      "card": card,
      "phone": phone,
      "problem": problem
    });
    console.log(patients)
    
  }

  return (
    <BrowserRouter>
    {Foo()}
      <header>
        <button onClick={Mote} className='button'>+</button>
      </header>
      <div className='main'>
        <table className="container">
          <thead>
            <tr>
              <th><h1>Имя пациента</h1></th>
              <th><h1>Медицинская карточка</h1></th>
              <th><h1>Номер теелфона</h1></th>
              <th><h1>Проблема</h1></th>
            </tr>
          </thead>
          <tbody>
            {patients.map(function (object, i) {
              console.log(object['name']);
              return <TableRow key={i} name={object['name']} card={object['card']} phone={object['phone']} problem={object['problem']} />
            })}
          </tbody>
        </table>

      </div>
      <Routes>
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}
