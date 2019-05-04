var d6 = Math.floor(Math.random()*6)+1;
console.log(d6);
var d20 = Math.floor(Math.random()*20)+1;
if(d20 == 1){
    console.log("Critical failure!");
}else{
    console.log("You rolled "+d20);
}