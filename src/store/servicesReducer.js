const defaultState = {
    order: []
}

const NEW_ORDER = "NEW_ORDER"

export const orderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEW_ORDER:
            try {
                return {order: [...action.payload]}
            } catch (e) {
                return {error: [action.payload]}
            }
        default:
            return state
    }
}

export const newOrderAction = (payload) => ({type: NEW_ORDER, payload})