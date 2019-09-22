import React from 'react';
import Link from './Link';
import './ListOfLinks.css';
import LinkStore from './LinkStore';
import Octicon, {Plus} from '@primer/octicons-react'

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
        <div id="listWrapper" className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <ul>
                        {listVar}
                    </ul>
                </div>
            </div>
            <button onClick={this.addLink}><Octicon icon={Plus}/></button>
        </div>);
    }

    addLink(e) {
        this.updateLinkList(this.state.links.length+1, "ReplaceMe", "http://www.replaceme.com");
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
                //alert(this.urllist[i].id);
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