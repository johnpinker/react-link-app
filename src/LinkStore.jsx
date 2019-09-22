
class LinkStore {

    GetAllLinks() {
        let linkString = localStorage.getItem("links");
        let links;
        if (linkString === null)
        {
            links = [ {id: 1, href: "http://www.yahoo.com", name: "Yahoo"} ,
            {id: 2, href: "http://www.yahoo.com", name: "Yahoo"}];
            localStorage.setItem("links", JSON.stringify(links));
        }
        else {
            links = JSON.parse(linkString);
            
        }
        return links;
    }

    UpdateLinks(links) {
        localStorage.setItem("links", JSON.stringify(links));
    }

    GetNewId() {
        let links = this.GetAllLinks();
        let i=1;
        let idList = links.map((x) => x.id);
        while (idList.indexOf(i) !== -1) {
            i++;
        }
        return i;
    }
}

export default LinkStore;