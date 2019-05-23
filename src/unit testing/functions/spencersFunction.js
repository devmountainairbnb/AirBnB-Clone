module.exports = {
    bangAsAFunction: (value) => {
        if(value === true) {
            value = !value
        }
        else if(value === false) {
            value = !value
        }
        else if(value === 'not-a-boolean') {
            value = NaN
        }
        else {
            value = undefined
        }
        return value
    }
} 