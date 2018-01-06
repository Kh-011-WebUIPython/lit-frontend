import {connect} from 'react-redux'
import UserSettingsForm from '../form'

const mapStateToProps = state => {
    return {
        updating: state.update.updating,
        alert: state.alert,
        userinfo: state.userinfo,
    }
};


const UserSettings = connect(
    mapStateToProps,
    // mapDispatchToProps
)(UserSettingsForm);

export default UserSettings;