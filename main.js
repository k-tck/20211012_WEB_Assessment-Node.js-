const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const map = [hole,fieldCharacter]



for (let height=0; height < 10; height++) {
	let field = map[Math.floor(Math.random()*map.length)]
	for (let row=0; row < 10; row++) {
		field += map[Math.floor(Math.random()*map.length)]
	}
	console.log(field)
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Which way?`, name => {
    console.log("Thanks for playing")
  })
