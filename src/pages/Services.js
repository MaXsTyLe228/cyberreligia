import React from 'react';
import {useDispatch} from "react-redux";
import {fetchOrder} from "../store/newOrder";

const Services = () => {
    const dispatch = useDispatch()
    let name = React.createRef();
    let email = React.createRef();
    let status1 = React.createRef();
    let status2 = React.createRef();
    let message = React.createRef();

    const onOnclickHandler = (e) => {
        const inputParams = {
            name: name.current.value,
            email: email.current.value,
            statusHealth: status1.current.checked,
            statusDeath: status2.current.checked,
            message: message.current.value
        }
        console.log(inputParams)
        dispatch(fetchOrder(inputParams))
    };

    return (
        <div className={"servicesBlock"}>
            <h1>Замовити молебну</h1><br/>
            <h2>Ваше ім'я, (прізвище):</h2>
            <input className={"servicesText"} ref={name}/><br/><br/>
            <h2>Електронна адреса:</h2>
            <input className={"servicesText"} type={"email"} ref={email}/><br/><br/>
            <input id={"checkbox1"} type={"checkbox"} ref={status1}/><label htmlFor={"checkbox1"}><h5>за
            здравіє</h5>
        </label>
            <input id={"checkbox2"} type={"checkbox"} ref={status2}/><label htmlFor={"checkbox2"}><h5>за
            упокій</h5>
        </label><br/><br/>
            <h3>Впишіть до 10 імен:</h3>
            <textarea ref={message}></textarea><br/><br/>
            <button onClick={onOnclickHandler}>Відправити</button>
        </div>
    );
};

export default Services;