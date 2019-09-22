
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
}

export default LinkStore;