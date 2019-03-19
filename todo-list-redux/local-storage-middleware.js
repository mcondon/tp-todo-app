
function getInitialState(key) {
    let storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : undefined
}

function localStorageMiddleware(key) {
    return ({ getState }) => next => action => {
        next(action)
        setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(getState()))
        })
    }
}

export { getInitialState, localStorageMiddleware }