import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.scss';


function Sidebar({data}) {
    return(
        <div className="sidebar">
            {data.map(chapter => {
                return (
                    <Fragment>
                        <p>{chapter.chapterTitle}</p>
                        <ul>
                            {chapter.topics.map(topic => {
                                return <li className="sidebar-btn"><Link to={`${topic.url}`}>{topic.title}</Link></li>;
                            })}
                        </ul>
                    </Fragment>
                )
            })}
            
            
        </div>
    )
}

export default Sidebar;