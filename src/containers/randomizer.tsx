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
}

const Component: React.SFC<IRandomizerProps> = props => (
    <div className='randomizer'>
        <div className='toolbar'>
            <button className='toolbar-button' onClick={props.randomize}>
                Randomize
            </button>
            <button className='toolbar-button' onClick={props.unlockAll}>
                Unlock All
            </button>
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
