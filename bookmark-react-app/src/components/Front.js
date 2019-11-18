import React from 'react';
import List from './List';

class Front extends React.Component {
    constructor(props){
        super(props);
        this.state = {};   
    }

   

    render(){

        function handleSubmit(event){
            event.preventDefault();
            console.log(event.currentTarget.children[0].value);
        };

        return (
            <div className="front-page">
                <form onSubmit={(event) => {handleSubmit(event);}}>
                    <input type="text"></input>
                    <button type="submit">Search</button>
                </form>
                <select className="book-type">
                    <option value="" >No Filter</option>
                    <option value="free-ebooks">Free Ebooks</option>
                </select>
                <List />
            </div>
        )
    }

    
}

export default Front;