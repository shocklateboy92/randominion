import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AllActions } from 'src/actions';
import CardInfoPane from 'src/components/card-info-pane';
import CardsList from 'src/components/cards-list';
import { IRootState } from 'src/reducers';
import { canRedo, canUndo } from 'src/selectors/undo.selectors';
import '../styles/randomizer.scss';

interface IRandomizerProps {
    randomize: () => void;
    unlockAll: () => void;
    undo: () => void;
    redo: () => void;

    canUndo: boolean;
    canRedo: boolean;
}

const Component: React.SFC<IRandomizerProps> = props => (
    <div className='randomizer'>
        <div className='toolbar'>
            <button onClick={props.randomize}>Randomize</button>
            <button onClick={props.unlockAll}>Unlock All</button>
            <button disabled={!props.canUndo} onClick={props.undo}>
                Undo
            </button>
            <button disabled={!props.canRedo} onClick={props.redo}>
                Redo
            </button>
        </div>
        <div className='container'>
            <CardsList />
            <CardInfoPane />
        </div>
    </div>
);

const Randomizer = connect(
    (state: IRootState) => ({
        canUndo: canUndo(state),
        canRedo: canRedo(state)
    }),
    dispatch => bindActionCreators({ ...AllActions }, dispatch)
)(Component);

export default Randomizer;
