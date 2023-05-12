import React from 'react'

export default function Form() {

    function Mote() {
        var name = document.getElementById("name");
        var card = document.getElementById("card");
        var phone = document.getElementById("phone");
        var problem = document.getElementById("problem");
        window.location.href = `http://localhost:3000/?name=${name.value}&&card=${card.value}&&phone=${phone.value}&&problem=${problem.value}`;
    }

    return (
        <div className='form-border'>


            <div className="form">
                <div className="title">Добро пожаловать!</div>
                <div className="subtitle">Введите данные пациента</div>
                <div className="input-container ic1">
                    <input id="name" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">ФИО</label>
                </div>
                <div className="input-container ic2">
                    <input id="card" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Медицинская карточка</label>
                </div>
                <div className="input-container ic2">
                    <input id="phone" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Номер телефона</label>
                </div>
                <div className="input-container ic2">
                    <input id="problem" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Название проблемы</label>
                </div>
                <button onClick={Mote} type="text" className="submit">submit</button>
            </div>
        </div>
    )
}
