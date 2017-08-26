import template from './cards.html';

export default {
    template,
    controller
};

controller.$inject = ['cardsService', '$rootScope'];

function controller(cards ) {
    
    this.colorOptions = ['white', 'blue', 'green', 'red', 'black', 'colorless'];
    this.setOptions = [{name: 'Shadows Over Innistrad', code: 'soi'},{name: 'Amonkhet', code: 'akh'}];
    this.sets = [];
    this.colors = [];

    this.addFilter = (filter, area)=>{
        console.log(filter, this[area]);
        let index = this[area].indexOf(filter);
        if (index === -1){
            this[area].push(filter);
        }
        else{this[area].splice(index, 1);

        }
        console.log(this[area]);
    };

    cards.getAllCards()
            .then((cards)=>{
                this.cards = cards.cards;
                console.log(this.cards);
            });

    this.getCards =()=>{
        let setCode = this.sets[0].code;
        cards.getSomeCards(setCode, this.colors)
            .then((cards)=>{
                console.log('cards are ', cards);
                this.cards = cards.cards;
                console.log(this.cards);
            });
    };
};