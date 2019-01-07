import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AllActions } from 'src/actions';
import CardInfoPane from 'src/components/card-info-pane';
import CardsList from 'src/components/cards-list';
import { IRootState } from 'src/reducers';
import { canRedo, canUndo, allUnlocked } from 'src/selectors/undo.selectors';
import '../styles/randomizer.scss';
import '../styles/button.scss';
import classNames from 'classnames';

interface IRandomizerProps {
    randomize: () => void;
    unlockAll: () => void;
    lockAll: () => void;
    undo: () => void;
    redo: () => void;

    canUndo: boolean;
    canRedo: boolean;
    allUnlocked: boolean;
}

const Component: React.SFC<IRandomizerProps> = props => (
    <div className='randomizer'>
        <div className='toolbar'>
            <span
                className='btn-container btn btn-one'
                onClick={props.randomize}
            >
                <span>Randomize</span>
            </span>
            <span
                className={classNames('btn-container btn btn-one', {
                    hidden: props.allUnlocked
                })}
                onClick={props.unlockAll}
            >
                <span>Unlock All</span>
            </span>
            <span
                className={classNames('btn-container btn btn-one', {
                    hidden: !props.allUnlocked
                })}
                onClick={props.lockAll}
            >
                <span>Lock All</span>
            </span>
            <span
                className={classNames('btn-container btn btn-one', {
                    disabled: !props.canUndo
                })}
                onClick={props.undo}
            >
                <span>Undo</span>
            </span>
            <span
                className={classNames('btn-container btn btn-one', {
                    disabled: !props.canRedo
                })}
                onClick={props.redo}
            >
                <span>Redo</span>
            </span>
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
        canRedo: canRedo(state),
        allUnlocked: allUnlocked(state)
    }),
    dispatch => bindActionCreators({ ...AllActions }, dispatch)
)(Component);

export default Randomizer;
