const  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const capitalizeAllFirstletters = (string) => {
    return string.replace(/\b[a-z]/g,c=>c.toUpperCase())
}

module.exports = {
    capitalizeFirstLetter,
    capitalizeAllFirstletters
}