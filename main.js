let cards = []

let pawPatrolCards = [
	'chase',
	'marshall',
	'skye',
	'rubble',
	'everest',
	'zuma',
	'rocky',
	'chickaletta',
	'liberty'
]

let upCards = []
let matched = []

function cardClicked() {
	if (event.target.dataset.side === 'down') {
		console.log(upCards.length)
		if (upCards.length >= 2) {
			statusMessage('Oops. You already have 2 cards up.', 'alert')
			return
		} else if (upCards.length === 1) {
			upCards.push(
				{
					cardNumber: event.target.dataset.cardNumber,
					cardValue: event.target.dataset.cardValue
				}
			)
			if (checkForMatch(upCards)) {
				console.log('match!')
				statusMessage('Wohoo! Match!', 'match')
				matched.push(upCards[0]['cardNumber'])
				matched.push(upCards[1]['cardNumber'])
				document.getElementById('card-' + upCards[0]['cardNumber']).dataset.status = 'matched'
				document.getElementById('card-' + upCards[1]['cardNumber']).dataset.status = 'matched'
				upCards = []
			} else {
				console.log('no match')
				statusMessage('No match', 'no-match')
				addAction('clear')
			}
		} else {
			upCards.push(
				{
					cardNumber: event.target.dataset.cardNumber,
					cardValue: event.target.dataset.cardValue
				}
			)
		}
		event.target.classList.remove('down')
		event.target.classList.add('up')
		event.target.dataset.side = 'up'
		getCardFromCardNumber(event.target.dataset.cardNumber)
		console.log(upCards)
	} else {
		event.target.classList.remove('up')
		event.target.classList.add('down')
		event.target.dataset.side = 'down'
		event.target.style.backgroundImage = "linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)"
	}
}

function getCardFromCardNumber(cardNumber) {
	console.log(cards[cardNumber])
	event.target.style.backgroundImage = "url('assets/paw-patrol/" + cards[cardNumber] + '.png'
}

function dealCards() {
	cards = pawPatrolCards
	cards = cards.concat(pawPatrolCards)
	cards = cards.sort(() => Math.random() - 0.5);
	for (i = 0; i < cards.length; i++) {
		document.getElementById('card-' + i).dataset.cardValue = cards[i]
	}
}
dealCards()

function statusMessage(message, type) {
	document.getElementById('message').textContent = message
	document.getElementById('message').classList.add(type)
}

function checkForMatch(upCards) {
	return upCards[0]['cardValue'] == upCards[1]['cardValue']
}

function addAction(action) {
	if (action === 'clear') {
		document.getElementById('action').textContent = 'Clear'
		document.getElementById('action').dataset.action = 'clear'
		document.getElementById('action').classList.add('clear')
	}
}

function removeAction(action) {
	if (action === 'clear') {
		document.getElementById('action').textContent = ''
		document.getElementById('action').dataset.action = ''
		document.getElementById('action').classList.remove('clear')
	}
}

function action() {
	if (event.target.dataset.action === 'clear') {
		clear()
	}
}

function clear() {
	let cardElements = document.getElementsByClassName('card')
	for (i = 0; i < cardElements.length; i++) {
		if (cardElements[i].dataset.status === 'unmatched') {
			cardElements[i].classList.remove('up')
			cardElements[i].classList.add('down')
			cardElements[i].dataset.side = 'down'
			cardElements[i].style.backgroundImage = "linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)"
		}
		upCards = []
	}
	removeAction('clear')
}

document.onkeyup = function(e) {
	if (e.keyCode === 32) {
		clear()
	}
}