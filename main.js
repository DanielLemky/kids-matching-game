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