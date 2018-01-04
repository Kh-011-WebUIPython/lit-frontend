import { connect } from 'react-redux'
import SignInForm from '../sign-in-form'

const mapStateToProps = state => {
    return {
        loggingIn: state.authentication.loggingIn,
        alert: state.alert,
    }
}

const SignIn = connect(
    mapStateToProps,
    // mapDispatchToProps
)(SignInForm)

export default SignIn