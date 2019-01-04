import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AllActions } from 'src/actions';
import CardsList from 'src/components/cards-list';
import '../styles/randomizer.scss';
import CardInfoPane from 'src/components/card-info-pane';

interface IRandomizerProps {
    randomize: () => void;
    unlockAll: () => void;
    undo: () => void;
    redo: () => void;
}

const Component: React.SFC<IRandomizerProps> = props => (
    <div className='randomizer'>
        <div className='toolbar'>
            <button onClick={props.randomize}>Randomize</button>
            <button onClick={props.unlockAll}>Unlock All</button>
            <button onClick={props.undo}>Undo</button>
            <button onClick={props.redo}>Redo</button>
        </div>
        <div className='container'>
            <CardsList />
            <CardInfoPane />
        </div>
    </div>
);

const Randomizer = connect(
    undefined,
    dispatch => bindActionCreators({ ...AllActions }, dispatch)
)(Component);

export default Randomizer;
