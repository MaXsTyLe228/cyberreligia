import axios from "axios";
import {newOrderAction} from "./servicesReducer";

export function fetchOrder(params) {
    return async function (dispatch) {
        await axios.post("http://127.0.0.1:7000/new_order", params)
            .then((data) => {
                //console.log(data.data)
                dispatch(newOrderAction(data.data))
            });
    };
}