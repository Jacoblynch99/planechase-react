import axios from 'axios'

export const getPlanes = () => {
    return function (dispatch) {
        axios
            .get('/users')
            .then((res) => {
                const action = {
                    type: 'GET_BUSINESSES',
                    value: res.data,
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getArchenemy = () => {
    return function (dispatch) {
        axios.get(`/users/tickets`).then((res) => {
            const action = {
                type: 'GET_TICKETS',
                value: res.data,
            }
            dispatch(action)
        })
    }
}
