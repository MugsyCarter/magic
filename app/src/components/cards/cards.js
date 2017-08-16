import template from './cards.html';

export default {
    template,
    controller
};

controller.$inject = ['cardsService', '$rootScope'];

function controller(cards ) {

    cards.getAllCards()
            .then((cards)=>{
                this.cards = cards.cards;
                console.log(this.cards);
            });
};