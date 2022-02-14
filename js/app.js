// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');
const btnContainer = document.getElementById("buttonsContainer");
const optContainer = document.getElementById('optionContainer')
let output = [];
let msg = document.getElementById("msg")
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.className="btnPlay"
speakButton.style.backgroundColor = 'gold'
speakButton.onclick = function() {
	textToSpeak = output.join(" ")
	speakNow(textToSpeak)
	console.log('the result is', output.join(" "))
	msg.textContent = textToSpeak
}

function speakFun() {
	textToSpeak = output.join(" ")
	msg. textContent= textToSpeak
	speakNow(output)
}



//Populate an array containing key words behind each of the 5 buttons.
const arrFirst = ['The turkey','Mom','Dad','The dog','My teacher','The elephant','The cat']
const arrSecond = ['sat on', 'ate','danced with','saw','doesn\'t like','kissed']
const arrThird = ['a funny','a scary', 'a goofy', 'a slimy', 'a barking', 'a fat']
const arrFourth = ['goat','monkey','fish','cow','frog','bug','worm']
const arrFifth = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']


//initialize the five buttons
function btnFun() {
	backColor = ['purple','lightblue','green','orange','#AA336A']
	for (let i = 0 ; i <5 ; i ++) {
		//for each itr from 0 to 4, create a button
		let btn = document.createElement("BUTTON")
		btn.className = 'roundbtn'
		btn.style.backgroundColor = backColor[i]
		//add the text to the button
		let text = document.createTextNode("")
		//append the text into the button
		btn.appendChild(text)
		//append the buttons into the button div
		btnContainer.appendChild(btn)
		// console.log("button created")
		//add event listener for each button to choose specific array values

		btn.addEventListener('click',()=>{
			let ranArray = [];
			// if(output[i]) {
			// 	output[i] = ""
			// }
			switch (i) {
				case 0:
					ranArray[i] = getRandomInt(arrFirst.length)
					output[i]=(arrFirst[ranArray[i]])
					speakFun()
					console.log(ranArray[i], output)
					break
				case 1:
					ranArray[i] = getRandomInt(arrSecond.length)
					output[i]=(arrSecond[ranArray[i]])
					speakFun()
					console.log(ranArray[i], output)

					break
				case 2:
					ranArray[i] = getRandomInt(arrThird.length)
					output[i]=(arrThird[ranArray[i]])
					speakFun()
					console.log(ranArray[i], output)
					break
				case 3:
					ranArray[i] = getRandomInt(arrFourth.length)
					output[i]=(arrFourth[ranArray[i]])
					speakFun()
					console.log(ranArray[i], output)
					break
				case 4:
					ranArray[i] = getRandomInt(arrFifth.length)
					output[i]=(arrFifth[ranArray[i]])
					speakFun()
					console.log(ranArray[i], output)
					break
			}
			return output
		})
	}
}

btnFun()

//add reset button to the end of the div
let btnReset = document.createElement("BUTTON")
btnReset.className = 'roundbtn reset'
btnReset.style.backgroundColor = 'darkred'
optContainer.appendChild(btnReset)
textReset = document.createTextNode("Reset")
btnReset.appendChild(textReset)

btnReset.addEventListener("click", ()=>{
	output = []
	msg.textContent = ""
})

//add generate story button
let btnGenStory = document.createElement("BUTTON")
btnGenStory.className = 'roundbtn story'
btnGenStory.style.backgroundColor = '#63c5da'
textReset = document.createTextNode("Story")
btnGenStory.appendChild(textReset)
optContainer.appendChild(btnGenStory)
optContainer.appendChild(speakButton)


btnGenStory.addEventListener("click", ()=>{
	output = []
	let ranArray = [];
	for (let i = 0; i<5 ; i++) {
		switch (i) {
			case 0:
				ranArray[i] = getRandomInt(arrFirst.length)
				output.push(arrFirst[ranArray[i]])
				console.log(ranArray[i], output)
				break
			case 1:
				ranArray[i] = getRandomInt(arrSecond.length)
				output.push(arrSecond[ranArray[i]])
				console.log(ranArray[i], output)
				break
			case 2:
				ranArray[i] = getRandomInt(arrThird.length)
				output.push(arrThird[ranArray[i]])
				console.log(ranArray[i], output)
				break
			case 3:
				ranArray[i] = getRandomInt(arrFourth.length)
				output.push(arrFourth[ranArray[i]])
				console.log(ranArray[i], output)
				break
			case 4:
				ranArray[i] = getRandomInt(arrFifth.length)
				output.push(arrFifth[ranArray[i]])
				console.log(ranArray[i], output)
				break
		}
	}
	msg.textContent = output.join(" ")
	return output
})


btnReset.style.fontWeight = 'bold'
btnGenStory.style.fontWeight = 'bold'
//generate integer from a function less than 'max'
function getRandomInt(max) {
	// floor return the largest less than or equal to a given number.
	return Math.floor(
	//Math.random() generate number from [0,1)
		Math.random() * max
	);
}












