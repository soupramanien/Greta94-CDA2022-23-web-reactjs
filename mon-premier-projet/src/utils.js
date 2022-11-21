// utils.js

// fonctions utilitaires

export function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

export function random(max) {
    return Math.ceil(Math.random() * max)
}
