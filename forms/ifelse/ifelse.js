let first_name = prompt(`Enter your first name:`)
let state = prompt(`Enter your state:`)
let temperature = prompt(`Enter temperature in Farenheit:`)


let message = ['	wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you wont need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.'];


if (temperature < 32){
console.log(`${message[0]}`);
}
else if(state === 'NE' || temperature >32 || temperature < 50){
console.log(`${message[1]}`);
}
else if(state === 'FL' || temperature >32 || temperature < 50){
console.log(`${message[2]}`);
}
else if(temperature > 50 || temperature < 70){
console.log(`${message[3]}`);
}