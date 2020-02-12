import axios from 'axios'
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//landingsquared.herokuapp.com/account' : '//localhost:3000/account';

let auth_api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function getAuth({ commit, dispatch }) {
    auth_api('authenticate')
        .then(res => {
            if (res.data == null) {
                commit('setLoginStatus', false)
            }
            else if (res.data._id !== null) {
                commit('setLoginStatus', true)
                commit('setUserInfo', res.data)
            } else {
                commit('setLoginStatus', false)
            }
        })
        .catch(err => {
        })
}
export function register({ commit }, obj) {
    auth_api.post('register', obj)
        .then(res => {
            commit('setLoginStatus', true)
            commit('setUserInfo', res.data)
            Notify.create({
                message: "Successfully created account",
                type: 'positive',
                color: 'positive',
                textColor: 'white',
                position: 'top',
            })
        })
        .catch(err => {
            Notify.create({
                message: "Something went wrong, please try again",
                type: 'red',
                color: 'negative',
                textColor: 'white',
                position: 'top',
            })
        })
}
export function login({ commit, dispatch }, obj) {
    auth_api.post('login', obj)
        .then(res => {
            commit('setLoginStatus', true)
            commit('setUserInfo', res.data)
        })
        .catch(err => {
            Notify.create({
                message: "Incorrect username or password",
                type: 'red',
                color: 'red',
                textColor: 'white',
                position: 'top',
            })
            commit('setLoginStatus', false)
        })
}
export function logout({ commit, dispatch }) {
    auth_api.delete('logout')
        .then(res => {
            commit('setLoginStatus', false)
            Notify.create({
                message: res.data.message,
                type: 'primary',
                color: 'primary',
                textColor: 'white',
                position: 'top',
            })
        }).catch(err => {
        })
}