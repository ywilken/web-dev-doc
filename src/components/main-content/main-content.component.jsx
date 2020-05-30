import React, {Fragment} from 'react';
import Markdown from 'markdown-to-jsx';
import './main-content.styles.scss';
import Prism from 'prismjs';
import '../../prism.css';

class MainContent extends React.Component {
    _isMounted = false;
    
    constructor(props) {
        super(props)

        console.log(`Constructor: ${this.props.title}`)

        this.state = {
            markdown: '',
        }
    }

    updateMarkdown = async () => {
        // How to get the md-files
        const folderUrl = this.props.folder;
        console.log(folderUrl)
        const pathUrl = this.props.content;
        const file = await import('../../content/'+folderUrl+'/'+pathUrl+'.md')
        // Previous attempt: const contentPath = require(pathUrl);
        await fetch(file.default)
        .then(response => {return response.text()})
        .then(text => {
            if(this._isMounted) {
                this.setState({
                    markdown: text
                })
            }
        })
    }

    componentDidMount() {
        this._isMounted = true;

        Prism.highlightAll();

        this.updateMarkdown();
    }

    componentDidUpdate() {
        Prism.highlightAll();

        // this.updateMarkdown();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        Prism.highlightAll();
        return (
            <div className="main-content">
                <Markdown>
                    {this.state.markdown}
                </Markdown>
            </div>
        )
    }
}

export default MainContent;