module.exports = {
    capitalize: (str) => {
        if(typeof str === "string"){
            let arr = str.split('_')
            let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
            arr.splice(0, 1, capitalized)
        
            return arr.join(' ')
        } else if(typeof str === "number"){
            return undefined
        } else if(typeof str === "undefined"){
            return undefined
        } else if(typeof str === "boolean"){
            return undefined
        } else if(typeof str === "object"){
            return undefined
        } else if(typeof str === "function"){
            return undefined
        }
    }
}