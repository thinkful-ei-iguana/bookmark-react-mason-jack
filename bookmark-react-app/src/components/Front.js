import React from 'react';
import List from './List';

class Front extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books : [],
            filter : false,
            term: ''
        };   
    }

    setSelected(items, searchItem, newFilter){
        this.setState({books: items, filter: newFilter, term: searchItem});
    }

    handleSubmit(event){
        event.preventDefault();

        //this.setState({term: event.currentTarget.children[0].value});
        this.apiCall(event.currentTarget.children[0].value, this.state.filter);
    };

    apiCall = (term, filter) =>{
        //console.log("filter is " + this.state.filter);
        let BASEURL= '';
        //console.log('filter is ' + this.state.filter);
        if(!filter){
            BASEURL= 'https://www.googleapis.com/books/v1/volumes?q=';
        } else {
            BASEURL = 'https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q='
        }
        fetch(`${BASEURL}${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(BASEURL); 
            //console.log('filter is ' + this.state.filter); 
            this.setSelected(data.items, term, filter);
        });
    }

    handleFilter = (event) =>{
        event.preventDefault();
        //console.log(this.state.filter);
        let newFilter = !this.state.filter;
        this.apiCall(this.state.term, newFilter);
    }
        
    handleExpand = (event) =>{
        //event.preventDefault();
        console.log(event.currentTarget);
        //this.setState(event.currentTarget)
        //event.currentTarget.
    }

    //exFunction={(event) => this.handleExpand(event)}
    render(){
        return (
            <div className="front-page">
                <form onSubmit={(event) => {this.handleSubmit(event);}}>
                    <input type="text"></input>
                    <button type="submit">Search</button>
                </form>
                <select className="book-type" onChange={(event) => {this.handleFilter(event)}}>
                    <option value="" >No Filter</option>
                    <option value="free-ebooks">Free Ebooks</option>
                </select>
                <List handleExpand={(event) => this.handleExpand(event)} list={this.state} />
            </div>
        )
    }

    
}

export default Front;