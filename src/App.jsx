import React from 'react';
import Intro from './components/Intro';
import Content from './components/Content';
import WaitCursor from './components/global/WaitCursor';

const App = ()=>{
    return(
        <div>
            <Intro/>
            <Content/>
            <WaitCursor/>
        </div>
    )
};

export default App;