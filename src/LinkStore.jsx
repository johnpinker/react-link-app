
class LinkStore {

    async GetAllLinks() {

        return fetch('http://localhost:8000/links', {mode: 'cors'})
        .then( resp => resp.json());
    }

    UpdateLink(id, name, href) {
      console.log(JSON.stringify({name, href}));
      return fetch('http://localhost:8000/links/'+id, 
        {mode: 'cors', method: 'PUT', 
        body: "name="+encodeURIComponent(name) + "&href=" + encodeURIComponent(href),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(resp => {
          if (resp.status !== 200) {
            console.log("Error updating " + name + " " + href);
            
          }
        });
    }

    removeLink(id) {
      return fetch('http://localhost:8000/links/'+id,
      {mode: 'cors', method: 'DELETE'})
      .then(resp => resp.json());
    }
    
    addLink(name, href) {
      return fetch('http://localhost:8000/links/',
      {mode: 'cors', method: 'POST'})
      .then(resp => resp.json());
    }


}

export default LinkStore;