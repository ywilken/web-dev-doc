import React, {Fragment} from 'react';
import Markdown from 'markdown-to-jsx';
import './main-content.styles.scss';
import Prism from 'prismjs';
import '../../prism.css';
import test from '../../markdown.md';

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            markdown: ''
        }
    }
    componentDidMount() {
        Prism.highlightAll();

        // How to get the md-files
        const contentPath = require('../../markdown.md');
        fetch(contentPath)
        .then(response => {return response.text()})
        .then(text => {
            this.setState({
                markdown: text
            })
        })
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }


    render() {
        console.log(this.state.markdown)
        const {content, title} = this.props;
        Prism.highlightAll();
        return (
            <div className="main-content">
                <h1>{title}</h1>

                {content.map(({type, content, lang}) => {
                    switch(type) {
                        case 'p':
                            return <p>{content}</p>;
                        case 'h2':
                            return <h2>{content}</h2>;
                        case 'code':
                            return <pre><code className={`language-${lang}`}>{content}</code></pre>;
                    }
                })}
                <Markdown>
                    {this.state.markdown}
                </Markdown>
            </div>
        )
    }
}

export default MainContent;