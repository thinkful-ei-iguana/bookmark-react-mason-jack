import React from 'react'
import './Item.css'

class Item extends React.Component{

    state = {
        expanded: false
    }

    handleExpand = (event) =>{
        this.setState({expanded : !this.state.expanded})
    }

    render(){
        const {volumeInfo} = this.props;
        const {expanded} = this.state;
    if(expanded){
        return (
            <div className="book" onClick={event => this.handleExpand(event) }>
                <img src={volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                <h3>{volumeInfo.title}</h3>
                <p>{volumeInfo.description}</p>
                <h4>{volumeInfo.authors}</h4>
            </div>
        );
    } else {
        return(
            <div className="book" onClick={event => this.handleExpand(event)}>
                <img src={volumeInfo.imageLinks.thumbnail} alt="book cover"/>
                <h3>{volumeInfo.title}</h3>
            </div>
        );
    }
}
}

export default Item;