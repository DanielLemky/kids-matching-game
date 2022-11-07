
function cardClicked() {
	if (event.target.dataset.side === 'down') {
		event.target.classList.remove('down')
		event.target.classList.add('up')
		event.target.dataset.side = 'up'
		getCardFromCardNumber(event.target.dataset.cardNumber)
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

function dealCards() {
	cards = pawPatrolCards
	cards = cards.concat(pawPatrolCards)
	cards = cards.sort(() => Math.random() - 0.5);
}
dealCards()