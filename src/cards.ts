import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';

export interface Expansion {
    name: string;
}

export interface Card {
    name: string;
    set: Expansion;
    image: string;
    index: number;
}

const sets = CardInfo.reduce(
    (prevSets, card) => {
        return card.set in prevSets
            ? prevSets
            : { [card.set]: { name: card.set }, ...prevSets };
    },
    {} as Dictionary<Expansion>
);

const validCards = CardInfo.filter(card => (
    card.set !== "Dark Ages" && 
    card.type === "kingdom" && 
    !(card.set === "Promo" && card.name !== "Walled Village" && card.name !== "Stash") && 
    !(card.set==="Intrigue 2nd Edition" && card.status === "removed")
)).sort((a, b) => a.name > b.name ? 1 : -1);

export const cards: Card[] = validCards.map((card, i) => ({
    name: card.name,
    set: sets[card.set]!,
    image: card.image,
    index: i
}));

export function getCardsToDisplay() {
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
      const cardIndexes = [];
      while(cardIndexes.length < 10){
          const randomInt = getRandomInt(cards.length);
          if(cardIndexes.indexOf(randomInt) === -1) {
              cardIndexes.push(randomInt);
          }
      }
      cardIndexes.sort((a, b)=>a - b);
      const randomCards : Card[] = cardIndexes.map(index => cards[index]);
    return randomCards;
}
