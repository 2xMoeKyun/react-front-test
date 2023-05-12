import React, { useState } from 'react'
import TableRow from './TableRow'


export default function Home(props) {

    useState(() => {
        console.log(typeof(props.patients))
    }, [])

    function Mote(){
        window.location.href = 'http://localhost:3000/form';
    }

    return (
        <>
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
                        {props.patients.map(function (object, i) {
                            return <TableRow key={i} name={object['name']} card={object['card']} phone={object['phone']} problem={object['problem']} />
                        })}
                    </tbody>
                </table>

            </div>
        </>
    )
}
