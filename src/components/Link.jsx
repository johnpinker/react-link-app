import React from 'react';
import Octicon, {Pencil, Check, Trashcan} from '@primer/octicons-react'
import './Links.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types';

class Link extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {edit: false, id: props.link._id, href: props.link.href, name: props.link.name};
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.removeLink = this.removeLink.bind(this);
    }

    render() {
        if (!this.state.edit)
            return( 
            <ListGroup.Item>
                    <a className="LinkA" href={this.state.href} target="_blank" rel="noopener noreferrer">{this.state.name}</a>
                    <Button type="button" className="LinkButton" onClick={this.toggleEdit} size="sm" variant="outline-primary"><Octicon icon={Pencil}/></Button>
                    <Button type="button" className="LinkButton" onClick={this.removeLink} size="sm" variant="outline-primary"><Octicon icon={Trashcan}/></Button>
            </ListGroup.Item>
            );
        else 
            return(
                <ListGroup.Item>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">URL</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.href} onChange={this.handleUrlChange}></FormControl>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.name} onChange={this.handleNameChange}></FormControl>
                    </InputGroup>
                    <Button type="button" onClick={this.toggleEdit} variant="outline-primary" size="sm"><Octicon icon={Check}/></Button>
                </ListGroup.Item>
            );
    }
    
    handleUrlChange(e) {
        this.setState({href: e.target.value});
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
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

Link.propType = {
    link: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
}
export default Link;