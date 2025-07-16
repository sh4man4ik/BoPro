//color scheme
let menuButton1 = document.getElementById('menuButton1');
let menuButton2 = document.getElementById('menuButton2');
let menuButton3 = document.getElementById('menuButton3');
let menuButton4 = document.getElementById('menuButton4');

let notesText = document.getElementById('notesText');

let todoButtonAdd = document.getElementById('todoButtonAdd');

function menuStartColorScheme() {
	if (menuButton1 != null) {
		menuButton1.style.outline = '2px solid white';
		menuButton1.style.outlineOffset = '5px';
	}

	let menuColorScheme = localStorage.getItem('colorScheme');

	if (menuColorScheme != null) {
		switch (menuColorScheme) {
			case 'black':
				menuBlackColorScheme();
				break;
			case 'red':
				menuRedColorScheme();
				break;
			case 'blue':
				menuBlueColorScheme();
				break;
			case 'green':
				menuGreenColorScheme();
				break;
			default:
				menuBlackColorScheme();
				break;
		}
	} else {
		document.body.style.backgroundColor = 'black';
	}
}
menuStartColorScheme();

function menuBlackColorScheme() {
	document.body.style.backgroundColor = 'black';
	localStorage.setItem('colorScheme', 'black');

	if (menuButton1 != null) {
		menuButton1.style.outline = '2px solid white';
		menuButton1.style.outlineOffset = '5px';

		menuButton2.style.outline = '';
		menuButton3.style.outline = '';
		menuButton4.style.outline = '';
	}

	if (notesText != null) {
		notesText.style.setProperty('--placeholder-color', 'black');
	}

	if (todoButtonAdd != null) {
		todoButtonAdd.style.backgroundColor = 'black';
	}
}

function menuRedColorScheme() {
	document.body.style.backgroundColor = '#5E3333';
	localStorage.setItem('colorScheme', 'red');

	if (menuButton2 != null) {
		menuButton2.style.outline = '2px solid white';
		menuButton2.style.outlineOffset = '5px';

		menuButton1.style.outline = '';
		menuButton3.style.outline = '';
		menuButton4.style.outline = '';
	}

	if (notesText != null) {
		notesText.style.setProperty('--placeholder-color', '#5E3333');
	}

	if (todoButtonAdd != null) {
		todoButtonAdd.style.backgroundColor = '#5E3333';
	}
}

function menuBlueColorScheme() {
	document.body.style.backgroundColor = '#33375E';
	localStorage.setItem('colorScheme', 'blue');

	if (menuButton3 != null) {
		menuButton3.style.outline = '2px solid white';
		menuButton3.style.outlineOffset = '5px';

		menuButton2.style.outline = '';
		menuButton1.style.outline = '';
		menuButton4.style.outline = '';
	}

	if (notesText != null) {
		notesText.style.setProperty('--placeholder-color', '#33375E');
	}

	if (todoButtonAdd != null) {
		todoButtonAdd.style.backgroundColor = '#33375E';
	}
}

function menuGreenColorScheme() {
	document.body.style.backgroundColor = '#335E3A';
	localStorage.setItem('colorScheme', 'green');

	if (menuButton4 != null) {
		menuButton4.style.outline = '2px solid white';
		menuButton4.style.outlineOffset = '5px';

		menuButton2.style.outline = '';
		menuButton3.style.outline = '';
		menuButton1.style.outline = '';
	}

	if (notesText != null) {
		notesText.style.setProperty('--placeholder-color', '#335E3A');
	}

	if (todoButtonAdd != null) {
		todoButtonAdd.style.backgroundColor = '#335E3A';
	}
}

//index.html
function menuTextMarginLeft() {
	let screenWidth = window.innerWidth;
	if (screenWidth > 1023) {
		let menuText = document.getElementById('menuText');
		if (menuText != null) {
			let colorSchemeWithText = document.getElementById('menuColorSchemeWithText');

			let left = menuText.getBoundingClientRect().left;
			colorSchemeWithText.style.marginLeft = left - 20 + 'px';
		}
	}
}
menuTextMarginLeft();

window.addEventListener('resize', function () {
	menuTextMarginLeft();
});

//pomodoro.html
let pomodoroTimer = document.getElementById('pomodoroTimer');
let pomodoroPomodoro = document.getElementById('pomodoroPomodoro');
let pomodoroShortBreak = document.getElementById('pomodoroShortBreak');
let pomodoroLongBreak = document.getElementById('pomodoroLongBreak');
let pomodoroTimerButton = document.getElementById('pomodoroTimerButton');
let pomodoroBottomText = document.getElementById('pomodoroBottomText');
let timeGo = true;
let time = 0;
let whatTimerIs;
let pomodoroButtonControl = true;
const ringtone = new Audio('../music/ringtone.mp3');

function pomodoroPomodoroTime() {
	if (pomodoroTimer != null) {
		whatTimerIs = 25;
		time = 1500;

		pomodoroTimerButton.textContent = 'START';

		pomodoroPomodoro.style.color = 'black';
		pomodoroShortBreak.style.color = '#9c9c9c';
		pomodoroLongBreak.style.color = '#9c9c9c';

		pomodoroTimer.textContent = '25:00';

		pomodoroBottomText.textContent = 'Time to focus!';

		ringtone.pause();
		ringtone.currentTime = 0;
	}
}
pomodoroPomodoroTime();

function pomodoroShortBreakTime() {
	if (pomodoroTimer != null) {
		whatTimerIs = 5;
		time = 300;

		pomodoroTimerButton.textContent = 'START';

		pomodoroPomodoro.style.color = '#9c9c9c';
		pomodoroShortBreak.style.color = 'black';
		pomodoroLongBreak.style.color = '#9c9c9c';

		pomodoroTimer.textContent = '5:00';

		pomodoroBottomText.textContent = 'Time for a break!';

		ringtone.pause();
		ringtone.currentTime = 0;
	}
}

function pomodoroLongBreakTime() {
	if (pomodoroTimer != null) {
		whatTimerIs = 30;
		time = 1800;

		pomodoroTimerButton.textContent = 'START';

		pomodoroPomodoro.style.color = '#9c9c9c';
		pomodoroShortBreak.style.color = '#9c9c9c';
		pomodoroLongBreak.style.color = 'black';

		pomodoroTimer.textContent = '30:00';

		pomodoroBottomText.textContent = 'Time for a break!';

		ringtone.pause();
		ringtone.currentTime = 0;
	}
}

async function pomodoroTimeStart() {
	if (!pomodoroButtonControl) {
		return;
	}

	pomodoroButtonControl = false;
	setTimeout(() => {
		pomodoroButtonControl = true;
	}, 500);

	ringtone.pause();
	ringtone.currentTime = 0;

	if (pomodoroTimerButton.textContent == 'START') {
		pomodoroTimerButton.textContent = 'PAUSE';
	} else {
		pomodoroTimerButton.textContent = 'START';
		return;
	}

	if (time <= 0) {
		switch (whatTimerIs) {
			case 25:
				time = 1500;
				break;
			case 5:
				time = 300;
				break;
			case 30:
				time = 1800;
				break;
			default:
				return;
		}
	}

	while (time >= 0) {
		if (pomodoroTimerButton.textContent == 'PAUSE') {
			timeGo = true;
		} else {
			timeGo = false;
		}

		if (timeGo) {
			const minutes = Math.floor(time / 60);

			let seconds = time % 60;
			seconds = seconds < 10 ? '0' + seconds : seconds;

			pomodoroTimer.textContent = `${minutes}:${seconds}`;

			time--;
			await sleep(1000);
		} else {
			return;
		}
	}

	if (time < 0) {
		pomodoroTimerButton.textContent = 'START';

		ringtone.play();

		timeGo = true;
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

//todo.html
let inputBox = document.getElementById('inputBox');
let todoListContainer = document.getElementById('todoListContainer');

function addTask() {
	if (inputBox.value.trim() !== '') {
		let li = document.createElement('li');
		li.textContent = inputBox.value;
		todoListContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}

	inputBox.value = '';

	todoSaveData();
}

if (todoListContainer) {
	todoListContainer.addEventListener(
		'click',
		function (e) {
			if (e.target.tagName === 'LI') {
				e.target.classList.toggle('checked');
				todoSaveData();
			} else if (e.target.tagName == 'SPAN') {
				e.target.parentElement.remove();
				todoSaveData();
			}
		},
		false
	);
}

function todoSaveData() {
	localStorage.setItem('todoTasks', todoListContainer.innerHTML);
}

function todoShowTasks() {
	if (todoListContainer) {
		todoListContainer.innerHTML = localStorage.getItem('todoTasks');
	}
}
todoShowTasks();

//notes.html
let menu = document.getElementById('menuBottom');

function notesStart() {
	let notesTextSave = localStorage.getItem('notesTextSave');

	if (notesTextSave != null && notesText != null) {
		notesText.textContent = notesTextSave;
	}
}
notesStart();

document.addEventListener('keyup', function (event) {
	if (notesText != null) {
		let notesTextValue = notesText.value;
		localStorage.setItem('notesTextSave', notesTextValue.trim());
	}
});

function notesTextHeight() {
	if (notesText != null) {
		let screenHeight = window.innerHeight;
		let screenWidth = window.innerWidth;

		let height = menu.offsetHeight;

		let offsetTop = notesText.getBoundingClientRect().top + window.scrollY;

		let computedStyle = window.getComputedStyle(notesText);
		let marginTop = Math.floor(parseFloat(computedStyle.marginTop));

		let allThisNumbers = screenHeight - height - offsetTop - marginTop - 20;

		if (screenWidth > 1023) {
			allThisNumbers += 20;
		}

		notesText.style.height = allThisNumbers + 'px';
	}
}
notesTextHeight();

window.addEventListener('resize', function () {
	notesTextHeight();
});
