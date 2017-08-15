import template from './cards.html';

export default {
    template,
    controller
};

controller.$inject = ['cardsService', '$rootScope'];

function controller(cards ) {

    cards.getAllCards()
            .then((cards)=>{
                console.log(cards);
            });
};