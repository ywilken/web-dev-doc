import React, {Fragment} from 'react';
import './main-content.styles.scss';
import Prism from 'prismjs';

class MainContent extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        const {content, title} = this.props;
        return (
            <div className="main-content">
                <h1>{title}</h1>
                <pre><code className="language-css">
                {`p { color: red }`}
                </code></pre>

                {content.map(contentItem => {
                    switch(contentItem.type) {
                        case 'p':
                            return <p>{contentItem.content}</p>
                    }
                })}
            </div>
        )
    }
}

export default MainContent;