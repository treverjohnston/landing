import { Notify } from 'quasar'

export function setLoginStatus(state, status) {
    state.loggedIn = status
    if (!status) {
        state.admin = false;
    }
    if (status) {
        Notify.create({
            message: 'Successfully Logged In',
            type: 'positive',
            position: 'top',
        })
    }
}

export function setUserInfo(state, userObj) {
    if (userObj.admin && state.loggedIn) {
        state.admin = true;
    }
    state.user = userObj;
}

