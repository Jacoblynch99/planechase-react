import { connect } from 'react-redux'
import UserLanding from '../components/UserLanding'
import { getPokemon } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        cards: cardMode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlanes: () => dispatch(getPlanes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
