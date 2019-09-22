import React from 'react';
import Octicon, {Pencil, Check, Trashcan} from '@primer/octicons-react'
import './Links.css'

class Link extends React.Component {
    constructor(props){
        super(props);
        this.state = {edit: false, id: props.link.id, href: props.link.href, name: props.link.name};
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.removeLink = this.removeLink.bind(this);
    }

    render() {
        if (!this.state.edit)
            return( 
            <li>
                <div className="LinkWrapper">
                    <a className="LinkA" href={this.state.href} target="_blank">{this.state.name}</a>
                    
                    <button className="LinkButton" onClick={this.toggleEdit}><Octicon icon={Pencil}/></button>
                    <button className="LinkButton" onClick={this.removeLink}><Octicon icon={Trashcan}/></button>
                </div>
            </li>
            );
        else 
            return(
                <div className="column">
                    <input className="LinkInput" type="text" value={this.state.href} onChange={this.handleUrlChange}></input>
                    <input className="LinkInput" type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                    <button className="LinkButton" onClick={this.toggleEdit}><Octicon icon={Check}/></button>
                </div>
            );
    }
    
    handleUrlChange(e) {
        this.setState({href: e.target.value});
        //this.props.onUpdate(this.state.id, this.state.name, this.state.href);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
        //this.props.onUpdate(this.state.id, this.state.name, this.state.href);
    }

    toggleEdit(e) {
        if (this.state.edit) 
            this.props.onUpdate(this.state.id, this.state.name, this.state.href, false);
        this.setState(state => ({edit: !this.state.edit}));
    }

    removeLink(e) {
        this.props.onUpdate(this.state.id, this.state.name, this.state.href, true);
    }

}


export default Link;