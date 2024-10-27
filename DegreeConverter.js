function convertToFahrenheit(temperatureInCelsius) {
    // Add validation for input should be a valid number
    if(temperatureInCelsius < 0){
        throw new Error("Invalid temperature Input value");
    }
    
    let result = (temperatureInCelsius * 9 / 5) + 32;
    result = Math.round(result);
    return result;
}

console.log("27 is ", convertToFahrenheit(27), " in Fahrenheit");
console.log("34 is ", convertToFahrenheit(34), " in Fahrenheit");