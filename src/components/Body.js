// import resList from '../utils/MockData';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import { API_DATA } from "../utils/Constants";
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';

const Body = () =>{
    // using state variable as 'listofRestaurants'
    // to modify state variable, second argument take as 'setListofRestaurants'
    // resList is passed as data for useState();
    const [listofRestaurants,setListofRestaurants] = useState([])
    const [filteredListRestaurants, setFilteredListRestaurants] = useState([])
   

    const [searchText, setSearchText] = useState("");

    

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(API_DATA);
        const json = await data.json();
        console.log(json)
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
        setFilteredListRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  
         
        console.log(listofRestaurants);
    };

   

    

    return listofRestaurants.length===0? <Shimmer/> :
    (
        
        <div className='body-container'>
            <div className='search'>
                <input type='text' className='searchbar' value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
                }} />
                <button onClick={()=>{
                    
                    const filteredRestaurants = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredListRestaurants(filteredRestaurants)
                }}>Search</button>

                <button   button className='filter-btn' onClick={
                    ()=>{
                        //filter logic 
                        const filteredList = listofRestaurants.filter((res)=>res.info.avgRating > 4) ;
                        // logic goes inside updating state variable
                        setListofRestaurants(filteredList);
                        
                    }
                }>Top Rated Restaurants</button>
                
            </div>
           
            <div className='res-container'>
                {/* looping  through state variable that contains data */}
                {filteredListRestaurants.map((restaurant)=>(
                    <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard   resData={restaurant}/>
                    </Link>
                    ))}
            </div>
        </div>
    )
}

export default Body