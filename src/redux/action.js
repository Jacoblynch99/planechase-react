import axios from 'axios'

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
