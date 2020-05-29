import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';


function Sidebar({data}) {
    return(
        <div className="sidebar">
            <p>Sidebar</p>
            <ul>
                {data.map(topic => {
                    return <li><Link to={`${topic.url}`}>{topic.title}</Link></li>;
                })}
            </ul>
            
        </div>
    )
}

export default Sidebar;