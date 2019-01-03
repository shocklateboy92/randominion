import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AllActions } from 'src/actions';
import CardsList from 'src/components/cards-list';
import '../styles/randomizer.scss';

interface IRandomizerProps {
    randomize: () => void;
}

const Component: React.SFC<IRandomizerProps> = props => (
    <div className='randomizer'>
        <div className='toolbar'>
            <button className='button-cta' onClick={props.randomize}>
                Randomize
            </button>
        </div>
        <CardsList />
    </div>
);

const Randomizer = connect(
    undefined,
    dispatch =>
        bindActionCreators({ randomize: AllActions.randomize }, dispatch)
)(Component);

export default Randomizer;
