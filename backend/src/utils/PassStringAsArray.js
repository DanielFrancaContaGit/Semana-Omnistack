module.exports = function passStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}