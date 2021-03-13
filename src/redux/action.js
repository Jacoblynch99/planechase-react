import axios from 'axios'

// Axios call that fetches planes from the set: Planechase Anthology Set/OPCA
export const getPlanes = () => {
    return function (dispatch) {
        axios
            .get('https://api.magicthegathering.io/v1/cards?set=OPCA')
            .then((res) => {
                const action = {
                    type: 'GET_PLANES',
                    value: res.data.cards,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

// Axios call that fetches cards from the Archenemy set eventually, still a work in progress

// export const getArchenemy = () => {
//     return function (dispatch) {
//         axios.get(`/users/tickets`).then((res) => {
//             const action = {
//                 type: 'GET_ARCHENEMY',
//                 value: res.data,
//             }
//             dispatch(action)
//         })
//     }
// }
