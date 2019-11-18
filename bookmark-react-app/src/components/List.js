import React from 'react';
import Item from './Item'

export default function List(props){

    //console.log(props);

    /*function exFunciton(event){
        event.preventDefault();
        console.log('event happens');
    }*/
    
    if(props.list.books === undefined){
        return null;
    } else {
        const list = props.list.books.map(item => <Item handleExpand={(event) => props.handleExpand(event)} expand={false} volumeInfo={item.volumeInfo}/>);
    return (
        <div className="return-list">
            {list}
        </div>
    )
    }

}
