import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AllActions } from 'src/actions';
import CardInfoPane from 'src/components/card-info-pane';
import CardsList from 'src/components/cards-list';
import { IRootState } from 'src/reducers';
import { canRedo, canUndo } from 'src/selectors/undo.selectors';
import '../styles/randomizer.scss';
import '../styles/button.scss';
import classNames from 'classnames';

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
            <div className='btn-container btn btn-one' onClick={props.randomize}><span>Randomize</span></div>
            <div className='btn-container btn btn-one' onClick={props.unlockAll}><span>Unlock All</span></div>
            <div className={classNames('btn-container btn btn-one', { 'disabled': !props.canUndo })} onClick={props.undo}>
                <span>Undo</span>
            </div>
            <div className={classNames('btn-container btn btn-one', { 'disabled': !props.canRedo })} onClick={props.redo}>
                <span>Redo</span>
            </div>
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
