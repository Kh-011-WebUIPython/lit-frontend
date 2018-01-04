import { connect } from 'react-redux'
import SignUpForm from '../sign-up-form'

const mapStateToProps = state => {
    return {
        registering: state.registration.registering,
        alert: state.alert,
    }
}

const SignUp = connect(
    mapStateToProps,
    // mapDispatchToProps
)(SignUpForm)

export default SignUp