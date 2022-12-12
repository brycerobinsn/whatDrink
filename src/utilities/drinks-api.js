import sendRequest from "./send-request"

const BASE_URL = '/api/drinks'

export function addDrink(formData) {
    return sendRequest(BASE_URL, 'POST', formData)
}

export function deleteDrink(drinkId) {
    return sendRequest(`${BASE_URL}/${drinkId}`, 'DELETE')
}

export function indexDrink(drinkId) {
    return sendRequest(`${BASE_URL}/${drinkId}`, 'GET')
}
