import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import { getPlanes } from '../redux/action'

// maps planes from global state to a local state in this container.
const mapStateToProps = (state) => {
    return {
        cards: state.planes,
    }
}

// maps axios call from action.js to a local state in this container.
const mapDispatchToProps = (dispatch) => {
    return {
        getPlanes: () => dispatch(getPlanes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
