import React, {Fragment} from 'react';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Main from './components/main/main.component';
import DataContent from './dataContent';
import './App.scss';


function App() {
    return(
        <div className="page">
            <Header />
            <div className="content">
                <Sidebar data={DataContent}/>
                <Main data={DataContent}/>
            </div>
        </div>
    )
}

export default App;