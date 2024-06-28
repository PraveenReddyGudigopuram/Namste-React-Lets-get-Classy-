import {CDN_URL} from '../utils/Constants';

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {info} = resData;
    const { name,areaName, cloudinaryImageId,costForTwo, avgRating } = info;
     return(
         <div className='res-card'>
             <img alt='res-img' className='res-img' src={CDN_URL+cloudinaryImageId}/>
             <h1>{name}</h1>
             <h2>{areaName}</h2>
             <h3>{avgRating} Stars</h3>
             <h4>{costForTwo}</h4>

                
                
         </div>
     )
 }

 export default RestaurantCard;