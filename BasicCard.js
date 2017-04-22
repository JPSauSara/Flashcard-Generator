'use strict';

// This file should define a Node module that exports a constructor for creating basic flashcards
// 		e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.


function BasicCard (front, back) {
	if (this instanceof BasicCard) {
		this.front = front;
		this.back = back;
	} else {
		return new BasicCard (front, back);
	}

};

// instanceof helps handle the removal of the "new" keyword when creating an instance of a class.

module.exports = BasicCard;






