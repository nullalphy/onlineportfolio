import activity1 from "../imagescompilation/Activity1"
import activity2 from "../imagescompilation/Activity2"
import activity3 from "../imagescompilation/Activity3"
import activity4 from "../imagescompilation/Activity4"
import activity5 from "../imagescompilation/Activity5"
import activity6 from "../imagescompilation/Activity6"
import activity7 from "../imagescompilation/Activity7"
import ControlStructure from "../imagescompilation/ControlStructure"
import randomnumber from "../imagescompilation/Randomnumber"
import game from "../imagescompilation/Game"
import LaboratoryExcercise1 from "../imagescompilation/LaboratoryExcercise1"
import LaboratoryExcercise2 from "../imagescompilation/LaboratoryExcercise2"
import LaboratoryExcercise3 from "../imagescompilation/LaboratoryExcercise3"
import POS from "../imagescompilation/POS"
import {Link} from "react-router-dom"

const Activities = ({activities}) => {

    const pics = (id) =>{
        switch(id){
            case 1:
                 return(<>
                     <img src={activity1.output1} alt=""/> 
                   
                </>)
                break;
            case 2:
                 return(<>
                    <img src={activity2.output2} alt=""/>
                   
                 </>)
                 break;
            case 3:
                return(<>
                    <img src={activity3.output3} alt=""/>
                    
                 </>)
                 break;
            case 4:
                return(<>
                    <img src={activity4.output4} alt=""/>
                    
                 </>)
                 break;
            case 5:
                return(<>
                    <img src={activity5.output5} alt=""/>
  
                 </>)
                 break;
            case 6:
                return(<>
                    <img src={activity6.add} alt=""/>
                    
                 </>)
                 break;
            case 7:
                return(<>
                    <img src={activity7.OutPut} alt=""/>
                    
                 </>)
                 break;
            case 8:
                return(<>
                    <img src={ControlStructure.output1} alt=""/>
                    
                 </>)
                 break;
            case 9:
                return(<>
                    <img src={randomnumber.output1} alt=""/>
                    
                 </>)
                 break;
            case 10:
                return(<>
                    <img src={game.output1} alt=""/>
                    
                 </>)
                break;
            case 11:
                return(<>
                    <img src={LaboratoryExcercise1.output1} alt=""/>
                    
                 </>)
                 break;
            case 12:
                return(<>
                    <img src={LaboratoryExcercise2.output1} alt=""/>
                    
                 </>)
                 break;
            case 13:
                return(<>
                    <img src={LaboratoryExcercise3.output1} alt=""/>
                    
                 </>)
                 break;
            case 14:
                return(<>
                    <img src={POS.output1} alt=""/>
                 </>)
                 break;
            default:
                <><h1>helloo</h1></>
                break;
  
         }
     }

    return (
        <div className="activitiesform">
            <h1>Activities</h1>
            <div className="activities">
                {activities.map(activity => (
                    <div key={activity.id} className="Activity">
                        <h1>{activity.activityname}</h1>
                        <div className="previewPic">
                            {pics(activity.id)}
                        </div>
                        <Link to={`/activities/${activity.id}`}>View</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Activities
