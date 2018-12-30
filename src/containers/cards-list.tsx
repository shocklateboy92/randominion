import * as React from 'react';
import { Card } from 'src/cards';
import { Dictionary } from 'src/models/dictionary';
import CardDisplay from 'src/components/card-display';

interface ICardsListState {
    imageUrls: Dictionary<string>;
}

interface CardsListProps {
    cardsToDisplay: Card[];
}

export default class CardsList extends React.Component<
    CardsListProps,
    ICardsListState
> {
    constructor(props: CardsListProps) {
        super(props);

        this.state = { imageUrls: {} };
    }

    public async componentDidMount() {
        const response = await fetch(
            `http://wiki.dominionstrategy.com/api.php?action=query&format=json&prop=imageinfo&titles=${this.props.cardsToDisplay
                .map(card => `File:${card.name}`)
                .join('|')}&iiprop=url`
        );
        const results = await response.json();
        const urls = this.state.imageUrls;

        for (const info of Object.values<any>(results.query.pages)) {
            const card = info.title
                .replace(/^File:/, '')
                .replace(/\.jpg$/, '')
                .replace('_', ' ');
            urls[card] = info.imageinfo && info.imageinfo.url;
        }

        this.setState({ imageUrls: urls });
    }

    public render() {
        return this.props.cardsToDisplay.map(card => (
            <CardDisplay
                key={card.name}
                card={card}
                imageUrl={this.state.imageUrls[card.name]}
            />
        ));
    }
}
