import React from 'react';

const Services = () => {
    return (
        <div className={"servicesBlock"}>
            <h1>Замовити молебну</h1><br/>
            <h2>Ваше ім'я, (прізвище):</h2>
            <input className={"servicesText"}/><br/><br/>
            <h2>Електронна адреса:</h2>
            <input className={"servicesText"} type={"email"}/><br/><br/>
            <input id={"checkbox1"} type={"checkbox"}/><label htmlFor={"checkbox1"}><h5>за здравіє</h5></label>
            <input id={"checkbox2"} type={"checkbox"}/><label htmlFor={"checkbox2"}><h5>за упокій</h5></label><br/><br/>
            <h3>Впишіть до 10 імен:</h3>
            <textarea></textarea><br/><br/>
            <button>Відправити</button>
        </div>
    );
};

export default Services;