import { Card } from 'src/cards';
import * as React from 'react';

export const CardDisplay: React.FunctionComponent<{
    card: Card;
}> = props => (
    <div className='card float'>
        {props.card.name}
        <img src={props.card.image} />
        <br/>{`Box: ${Math.floor(props.card.index/210)+1}, Row: ${Math.floor(props.card.index%210/30)+1}, Column: ${props.card.index%30+1}`}
    </div>
);
export default CardDisplay;
