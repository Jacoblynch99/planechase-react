import { combineReducers } from 'redux'

const planes = (state = [], action) => {
    switch (action.type) {
        case 'GET_BUSINESSES':
            return action.value
        default:
            return state
    }
}

const archenemy = (state = [], action) => {
    switch (action.type) {
        case 'GET_TICKETS':
            return action.value
        default:
            return state
    }
}

export default combineReducers({ planes, archenemy })
