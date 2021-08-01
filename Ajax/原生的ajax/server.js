
let str = "1234567890";
let num = "";
for(let i = 0; i < 4; i++){
    num += str.charAt(Math.floor(Math.random()*str.length));
}
console.log(num);