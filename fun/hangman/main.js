
let word_area;
let template_word;
let template_letter;
let template_symbol;
let current_word;
let prompt_popup;
let askletter_popup;
let manarea;
let keyboard;

let mistakes = 0;

let letters = [];

// UI Handler
function DiscardPrompt(){
	prompt_popup.style.display = "none";
	keyboard.style.display = "none";
	askletter_popup.style.display = "none";
}

// Array -> Screen Control
function DrawFromArray(){
	word_area.innerHTML = "";

	if(letters.length <= 0 ) {
		return;
	}

	// Start word
	NewWord();

	// loop through array
	letters.forEach(function (character, index) {

		const isSpace = character == " ";
		const isLetter = /[a-zA-Z]/.test(character);
		if(isSpace) {
			EndWord();
			NewWord();
		}
		else if (isLetter) {
			PlaceLetter(character);
		} else {
			PlaceSymbol(character);
		}

	});
}


// Array Control
function StringToArray(string) {
	// Clear letters array
	letters = [];

	for (let i = 0; i < string.length; i++) {
		let character = string.charAt(i);
		letters.push(character.toUpperCase());
	}
}

// Game Logic
function Setup(){

	let txt = document.getElementById("theinputbox").value;

	// Clear
	manarea.innerHTML = "";
	document.getElementById("wrongletters").innerHTML = "Wrong Letters: ";
	mistakes = 0;
	EndWord();
	
	StringToArray(txt);

	DrawFromArray();

	DiscardPrompt();
}

function CheckSuccess(){
	if(letters.length <= 0 ) {
		return false;
	}

	let success = true;
	// loop through array
	letters.forEach(function (character, index) {

		const isLetter = /[a-zA-Z]/.test(character);
		
		if (isLetter) {
			if(character.length <= 1) {
				success = false;
			}
		}

	});

	return success;
}

function StartOver() {
	mistakes = 0;

	letters.forEach(function (character, index) {
		if(character.length > 1) {
			letters[index] = letters[index][0];
		}
	});

	// Clear
	manarea.innerHTML = "";
	document.getElementById("wrongletters").innerHTML = "Wrong Letters: ";
	mistakes = 0;
	DrawFromArray();
}

function guess(letterobj) {
	DiscardPrompt();

	let letter_guess = letterobj.innerHTML;
	console.log(letter_guess);

	let there = false;
	letters.forEach(async function (character, index) {
		if(character == letter_guess) {
			letters[index] = character + ":";
			there = true;
			DrawFromArray();
		}
	});

	if(!there) {
		Append_Mistake(letter_guess);
	}

	let done = CheckSuccess();
	if(done) {
		console.log("done");
		document.getElementById("wrongletters").innerHTML = "YOU FINISHED";
	}
}

function Append_Mistake(letter){
	mistakes++;
	let wletter = document.getElementById("wrongletters");
	wletter.innerHTML = wletter.innerHTML + "  " + letter;

	let str = "man/" + mistakes + ".png";
	console.log(str);
	var x = document.createElement("IMG");
	x.style.width = "170px";
	x.style.height = "220px";
	x.style.position = "absolute";
	manarea.appendChild(x);
	x.src = str;


}

// UI Handler
function handleinputoninputdiv(ele){
	 if(event.key === 'Enter') {
		Setup();
	}
}

// UI Handler
function PromptNewWord() {
	// Make visible
	prompt_popup.style.display = "flex";
	keyboard.style.display = "block";

	document.getElementById("theinputbox").value = "";
	document.getElementById("theinputbox").focus();
}

function PromptGuessLetter(){
	askletter_popup.style.display = "block";
}

// UI Handler
function NewRound(){
	PromptNewWord();
}

// Screen control
function NewWord(){
	var new_word = template_word.cloneNode(true);
	word_area.appendChild(new_word);
	new_word.hidden=false;
	new_word.id = "";
	current_word = new_word;
	return new_word;
}

// Screen control
function EndWord(){
	current_word = null;
}

// Screen control
function PlaceLetter(letter){
	if(current_word == null) {
		console.log("Nope, the current word is null");
		return;
	}

	var new_letter = template_letter.cloneNode(true);
	new_letter.innerHTML = letter[0].toUpperCase();
	current_word.appendChild(new_letter);
	new_letter.hidden=false;
	if(letter.length > 1) {
	new_letter.style.fontSize = "45px";
	} else {
		new_letter.style.fontSize = "0px";
	}

	new_letter.id="";
}

// Screen control
function PlaceSymbol(symbol) {
	if(current_word == null) {
		console.log("Nope, the current word is null");
		return;
	}

	var new_symbol = template_symbol.cloneNode(true);
	new_symbol.innerHTML = symbol;
	current_word.appendChild(new_symbol);
	new_symbol.hidden=false;
	new_symbol.id="";
}

// Game Logic
function Initialize() {
	console.log("Started");


	template_word = document.getElementById("wordtemplate");
	template_letter = document.getElementById("lettertemplate");
	template_symbol = document.getElementById("symboltemplate");
	prompt_popup = document.getElementById("prompt");
	askletter_popup = document.getElementById("askletter_prompt");
	manarea = document.getElementById("man_area");
	keyboard = document.getElementById("pkeyboard");

	word_area = document.getElementById("wordarea");

	//StringToArray("Don't you love test strings?");
	DrawFromArray();


}

function AddToStringBox(text){
	var input = document.getElementById('theinputbox');

	var startPos = input.selectionStart;
    var endPos = input.selectionEnd;
	
    var currentValue = input.value;

	input.value = currentValue.slice(0, startPos) + text + currentValue.slice(endPos);

	input.selectionStart = input.selectionEnd = startPos + text.length;
}

function RemoveFromStringBox() {
    var input = document.getElementById('theinputbox');
    
    // Get the current cursor position
    var startPos = input.selectionStart;
    var endPos = input.selectionEnd;
    
    // Get the current value of the input box
    var currentValue = input.value;
    
    // If there is a selection, remove the selected text
    if (startPos !== endPos) {
        input.value = currentValue.slice(0, startPos) + currentValue.slice(endPos);
        // After removing the selection, the cursor stays at the start position
        input.selectionStart = input.selectionEnd = startPos;
    } 
    // If no selection, remove the character before the cursor (backspace behavior)
    else if (startPos > 0) {
        input.value = currentValue.slice(0, startPos - 1) + currentValue.slice(startPos);
        // Move the cursor one position left after deletion
        input.selectionStart = input.selectionEnd = startPos - 1;
    }
}

let shiftmode = false;
let caps = false;

function SetCaps(value){
	if(caps != value) {
		caps = value;
		if(value == true) {
			document.getElementById("capskey").style.backgroundColor = "#0060df";
			document.getElementById("capskey").style.color = "#FFFFFF";
		} else {
			document.getElementById("capskey").style.backgroundColor = "#E0E0E0";
			document.getElementById("capskey").style.color = "#000000";
		}
	}
}

function SetShiftMode(value){
	if(shiftmode != value) {
		SetCaps(false);
		shiftmode = value;
		if(value == true) {
			document.getElementById("shiftkey").style.backgroundColor = "#0060df";
			document.getElementById("shiftkey").style.color = "#FFFFFF";
		} else {
			document.getElementById("shiftkey").style.backgroundColor = "#E0E0E0";
			document.getElementById("shiftkey").style.color = "#000000";
		}
	}
}


document.querySelectorAll('.jbutton').forEach(function(button, index) {
    button.addEventListener('click', function() {

		let mainText = button.textContent.trim();

		let shiftText = button.querySelector('.shift');

		if (shiftText) {
			shiftText = shiftText.textContent.trim();
			mainText = mainText.replace(shiftText, '');
		} else {
			shiftText = mainText;
		}


		document.getElementById("theinputbox").focus();

		if(button.innerHTML == "ENTER") {
			Setup();
			return;
		}

		if(button.innerHTML == "SHIFT") {
			SetShiftMode(!shiftmode);

			return;
		}

		if(button.innerHTML == "SPACE") {
			AddToStringBox(" ");
			return;
		}
		console.log(button.innerHTML);
		if(button.innerHTML == "&lt;----") {
			RemoveFromStringBox();
			return;
		}

		if(button.innerHTML == "EXIT") {
			DiscardPrompt();
			return;
		}

		if(button.innerHTML == "TAB") {
			AddToStringBox("    ");
			return;
		}

		if(button.innerHTML == "CAPS LOCK") {
			SetShiftMode(!shiftmode);
			SetCaps(shiftmode);
			return;
		}

		if(shiftmode) {
			AddToStringBox(shiftText);
			if(!caps) {
				SetShiftMode(false);
			}

		} else {
			AddToStringBox(mainText);
		}

		
		
    });
});

function keepInputFocused() {
    var input = document.getElementById("theinputbox");
    
    // Check if the input is visible and not focused
    if (input.offsetParent !== null && document.activeElement !== input) {
        input.focus();
    }
}

setInterval(keepInputFocused, 100);

Initialize();


SetShiftMode(false);