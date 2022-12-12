import sendRequest from "./send-request";

<<<<<<< HEAD
export async function signUp(userData){
    const res = await fetch(BASE_URL, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    if (res.ok){
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
}

export async function login(credentials) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    if (res.ok){
        return res.json()
    } else {
        throw new Error('Invalid Log In')
    }
=======
const BASE_URL = '/api/users'

export function signUp(userData){
    return sendRequest(BASE_URL, 'POST', userData)
}
export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}
export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
>>>>>>> 0c933ab
}