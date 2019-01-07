import * as React from 'react';
import Randomizer from './containers/randomizer';

import './App.css';
import './styles/body.scss';

class App extends React.Component {
    public render() {
        return (
            <div className='App'>
                <Randomizer />
            </div>
        );
    }
}

export default App;
