import axios from 'axios'
import { Notify } from 'quasar'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//landing.ebenezerwebsites.com/api/submissions' : '//localhost:3000/api/submissions';

let api = axios.create({
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

export function getRawReportData({ commit }) {
    api.get('')
        .then(res => {
            commit('setRawReportData', res.data)
        })
        .catch(err => {
            console.err('Error getting reports', err)
        })
}
export function submit({ commit }, obj) {
    api.post('', obj)
        .then(res => {
            Notify.create({
                message: "Successfully sent message",
                type: 'positive',
                color: 'positive',
                textColor: 'white',
                position: 'top',
            })
        })
        .catch(err => {
            Notify.create({
                message: "Error submitting message",
                type: 'red',
                color: 'red',
                textColor: 'white',
                position: 'top',
            })
        })
}