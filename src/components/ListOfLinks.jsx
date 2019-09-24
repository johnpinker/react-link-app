import React from 'react';
import Link from './Link';
import './ListOfLinks.css';
import LinkStore from '../LinkStore';
import Octicon, {Plus} from '@primer/octicons-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


class ListOfLinks extends React.Component {

    componentDidMount() {
        let links = new LinkStore();
        links.GetAllLinks()
        .then(resp => {
            this.setState({links: resp, loading: false });
        });

    }
    constructor() {
        super();
        this.updateLinkList = this.updateLinkList.bind(this);
        this.addLink = this.addLink.bind(this);
        this.state = {links: [], loading: true };
    }


    render() {
        const {loading, links} = this.state;
        if (loading) {
            return (<div>Loading...</div>)
        } else {
        return(
            <Container>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {links.map((l, index) => <Link link={l} key={l._id} onUpdate={this.updateLinkList}></Link>)}
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs="4">
                    <span id="addNewSpan">Add New Link</span><Button onClick={this.addLink} variant="outline-primary" size="sm"><Octicon icon={Plus}/></Button>
                    </Col>
                </Row>
            </Container>);
        }
    }

    addLink(e) {
        const newName = "ReplaceMe";
        const newHref = "http://www.replaceme.com";
        let ls = new LinkStore();
        ls.addLink(newName, newHref).then(resp => {
            let newId = resp._id;
            let urllist = this.state.links.slice();
            urllist.push({_id: newId, name: newName, href: newHref});
            this.setState({links: urllist});
        });

    }

    updateLinkList(id, name, url, remove) {
        if (remove === true) {
            this.removeLink(id, name, url);
            return;
        }
        this.urllist = this.state.links;
        let links = new LinkStore();
        links.UpdateLink(id, name, url).then(
            (r) => {
                links.GetAllLinks()
                .then(resp => {
                this.setState({links: resp, loading: false });
                });
            });
    }

    removeLink(id, name, url) {
        let links = new LinkStore();
        links.removeLink(id).then( resp => {
            if (resp._id === undefined)
                console.log("error removing link " + id);
                links.GetAllLinks()
                .then(resp => {
                    this.setState({links: resp, loading: false });
                });
        });
    }
}

export default ListOfLinks;