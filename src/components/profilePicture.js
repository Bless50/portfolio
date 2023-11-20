 
import image5 from './image5.jpg';
 const profilePicture = () => {
    
    return(

        <div className='shrink-image'  height="250px"
        width="250px">
            <img src={image5} alt='my-pic'/>
        </div>
    );
 }

 export default profilePicture;