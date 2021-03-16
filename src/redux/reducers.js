import { combineReducers } from 'redux'

// takes axios call
const planes = (state = [], action) => {
    switch (action.type) {
        case 'GET_PLANES':
            return action.value
        default:
            return state
    }
}

// const archenemy = (state = [], action) => {
//     switch (action.type) {
//         case 'GET_ARCHENEMY':
//             return action.value
//         default:
//             return state
//     }
// }

export default combineReducers({ planes })
