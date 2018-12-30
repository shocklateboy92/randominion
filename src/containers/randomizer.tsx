import { Card, getCardsToDisplay } from 'src/cards';
import * as React from 'react';
import CardsList from 'src/components/cards-list';

import '../styles/randomizer.scss'

interface IRandomizerProps {
    dummy?: 0;
}

interface IRandomizerState {
    currentCards: Card[];
}

export default class Randomizer extends React.Component<
    IRandomizerProps,
    IRandomizerState
> {
    constructor(props: IRandomizerProps) {
        super(props);

        this.state = {
            currentCards: getCardsToDisplay()
        };
    }

    public render() {
        return (
            <div className="randomizer">
                <div className="toolbar">
                    <button className="button-cta">Randomize</button>
                </div>
                <CardsList cardsToDisplay={this.state.currentCards} />
            </div>
        );
    }
}
