 

import swimmingIMG from '../assets/swimming.png';
import playItIMG from '../assets/playground.png';
import classImg from '../assets/class.png';;
 
 
 const QZone = () => {
    
    return (
        <div className='bg-base-200 p-5 rounded-2xl'>
            <h1 className='font-bold'>Q-Zone</h1>
            <div className='space-y-5 mt-5'> 
                 
                <img src={swimmingIMG} alt="" />
                <img src={classImg} alt="" />
                <img src={playItIMG} alt="" />
            </div>
        </div>
    );
 };
 
 export default QZone;