import React from "react";
import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from '../compomemts/PlaceItem'
import Button from "../../shared/components/FormElements/Button";

const PlacesList = props => {
    if(props.item.length === 0){
       return (
        <div className="place-list center">
            <Card>
                <h2>No places found. Maybe create one?</h2>
                <Button to="/places/new">Share place</Button>
            </Card>

        </div>
    ); 
    }
    return <ul className="place-list">
        {props.item.map(place => <PlaceItem 
        key={place.id} id={place.id} 
        image={place.imageUrl} 
        title={place.title} 
        description={place.description} 
        address={place.address} 
        createId={place.creator} 
        coordinates={place.location} />)}
    </ul>
    
}

export default PlacesList;