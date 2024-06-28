import { RES_MENU } from "../utils/Constants";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const [resInfo,setResInfo]= useState(null);

    // params - to iterate and fetch restaurant id for dynamic.
    const params = useParams();
    const {resId} = params;


    useEffect(() =>{
        fetchMenu();
    },[]);

    

    const fetchMenu = async() =>{
        const data = await fetch(RES_MENU + resId);
        const json = await data.json();
        setResInfo(json.data); 
        
    } 

if(resInfo===null) return <Shimmer/>

const {name,description} = resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info;
 
    return(
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h2>{name}</h2>
            <p>{description}</p>
            
        </div>

    )
}

export default RestaurantMenu;