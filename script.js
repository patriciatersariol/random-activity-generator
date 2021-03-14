const getApi = () => {
    return fetch('https://www.boredapi.com/api/activity')
    .then ( response => {
        return response.json()
    })
}

export const services = {
    getApi
}