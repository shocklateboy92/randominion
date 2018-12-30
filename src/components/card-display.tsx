import { Card } from 'src/cards';
import * as React from 'react';

export const CardDisplay: React.FunctionComponent<{
    card: Card;
    imageUrl: string | undefined;
}> = props => (
    <div className='card float'>
        {props.card.name}
        <img src={props.imageUrl} />
    </div>
);
export default CardDisplay;
