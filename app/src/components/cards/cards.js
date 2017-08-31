import template from './cards.html';

export default {
    template,
    controller
};

controller.$inject = ['cardsService', 'deckService', '$rootScope'];

function controller(cards, deck) {
    
    this.colorOptions = ['white', 'blue', 'green', 'red', 'black', 'grey'];
    this.setOptions = [{name: 'Shadows Over Innistrad', code: 'soi'},{name: 'Amonkhet', code: 'akh'}, {name: 'Aether Revolt', code: 'aer'}, {name: 'Kaladesh', code: 'kld'}, {name: 'Magic Origins', code: 'ori'}, {name: 'Oath of the Gatewatch', code: 'ogw'}, {name: 'Battle for Zendikar', code: 'bfz'}, {name: 'Eldritch Moon', code: 'emn'}];
    this.sets = [];
    this.colors = [];
    this.showLands ={
        value: false
    };

    cards.getAllCards()
        .then((cards)=>{
            this.cards = cards.cards;
            console.log(this.cards);
        });

    deck.getDeck()
        .then((deck)=>{
            console.log(deck);
            this.deck = deck.cards;
            console.log('the deck is this ', this.deck);
        });

    this.checkSetFilter = (setName)=>{
        for (let i =0; i < this.sets.length; i++){
            if (this.sets[i].name === setName){
                return true;
            }
        }
        return false;
    },

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

    this.getCards =()=>{
        let setCode = 'soi';
        if (this.sets.length > 0){
            setCode = this.sets[0].code;
        }
        cards.getSomeCards(setCode, this.colors)
            .then((cards)=>{
                console.log('cards are ', cards);
                this.cards = cards.cards;
                console.log(this.cards);
                // if (this.cards.length>=100){
                //     console.log('getting more cards ');
                // }
            });
        if (this.showLands.value === true){
            cards.getLands(this.colors)
                .then((landCards)=>{
                    console.log('land cards are ', landCards.cards);
                    this.cards += landCards.cards;
                });
        }
    };
};