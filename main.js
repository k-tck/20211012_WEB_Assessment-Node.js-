// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`Which way?`, name => {
//     if
//     return
//   })


const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const map = [hole,fieldCharacter]



let field = [
    [pathCharacter,tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()],   
    [tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile(),tile()]];

function tile() {
    // let y = (Math.random(), map[0],map[1])
    let y = map[Math.floor(Math.random()*map.length)]
    return y;
}

console.log(field)
