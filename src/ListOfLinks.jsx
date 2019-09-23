import React from 'react';
import Link from './Link';
import './ListOfLinks.css';
import LinkStore from './LinkStore';
import Octicon, {Plus} from '@primer/octicons-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class ListOfLinks extends React.Component {
    urllist;
    itemList;
    constructor(props) {
      super(props);
      let links = new LinkStore();
      this.urllist = links.GetAllLinks();
      this.state = {links: this.urllist};
      this.updateLinkList = this.updateLinkList.bind(this);
      this.addLink = this.addLink.bind(this);
      this.itemList = this.urllist.map((l, index) => <Link link={l} key={l.id} onUpdate={this.updateLinkList}></Link>);
    }


    render() {
        let listVar = this.state.links.map((l, index) => <Link link={l} key={l.id} onUpdate={this.updateLinkList}></Link>);
        return(
        <Container>
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {listVar}
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

    addLink(e) {
        let ls = new LinkStore();
        let newId = ls.GetNewId();
        this.updateLinkList(newId, "ReplaceMe", "http://www.replaceme.com");
    }

    updateLinkList(id, name, url, remove) {
        if (remove === true) {
            this.removeLink(id, name, url);
            return;
        }
        this.urllist = this.state.links;
        let links = new LinkStore();
        for (let i=0; i < this.urllist.length; i++) {
           
            if (this.urllist[i].id === id) {
                this.urllist[i].href = url;
                this.urllist[i].name = name;
                this.setState({links: this.urllist});
                links.UpdateLinks(this.urllist);
                return;
            }
        }
        this.urllist.push({id: this.urllist.length+1, href: url, name: name});
        this.setState({links: this.urllist});
        links.UpdateLinks(this.urllist);
        this.forceUpdate();
    }

    removeLink(id, name, url) {
        this.urllist = this.state.links;
        let links = new LinkStore();
        let tmpLinks = [];
        for (let i=0; i < this.urllist.length; i++) {
           
            if (this.urllist[i].id !== id) {
                tmpLinks.push(this.urllist[i]);
            }
        }
        links.UpdateLinks(tmpLinks);
        this.urllist = tmpLinks;
        this.setState({links: this.urllist});
        this.forceUpdate();
    }
}

export default ListOfLinks;