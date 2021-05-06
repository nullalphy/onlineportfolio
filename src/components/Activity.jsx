import {useParams} from "react-router-dom"
import Bottomnav from "./Bottomnav"
import Picture from "./Picture"



const Activity = ({activities}) => {
    const { id } = useParams()

    const Pics = [
            ["/Activity_pictures/Activity1/output1.png","/Activity_pictures/Activity1/code1.png"],
            ["/Activity_pictures/Activity2/output.png","/Activity_pictures/Activity2/code.png"],
            ["/Activity_pictures/Activity3/output.png","/Activity_pictures/Activity3/code.png",],
            ["/Activity_pictures/Activity4/OUTPUT.png","/Activity_pictures/Activity4/CODE.png"],
            ["/Activity_pictures/Activity5/OUTPUT.png","/Activity_pictures/Activity5/CODE.png"],
            ["/Activity_pictures/Activity6/add.png",
            "/Activity_pictures/Activity6/sub.png",
            "/Activity_pictures/Activity6/mult.png",
            "/Activity_pictures/Activity6/div.png",
            "/Activity_pictures/Activity6/expo.png",
            "/Activity_pictures/Activity6/modul.png",
            "/Activity_pictures/Activity6/output1.png",
            "/Activity_pictures/Activity6/output2.png",
            "/Activity_pictures/Activity6/output3.png",
          ],
            ["/Activity_pictures/Activity7/OutPut.png",
            "/Activity_pictures/Activity7/areaTriangle.png",
            "/Activity_pictures/Activity7/areaCircle.png",
            "/Activity_pictures/Activity7/areaRectangle.png",
            "/Activity_pictures/Activity7/volumeCone.png",
            "/Activity_pictures/Activity7/volumeCylinder.png",
            "/Activity_pictures/Activity7/arithmetic.png",
            "/Activity_pictures/Activity7/arithmeticForm.png",
          ],
            ["/Activity_pictures/ControlStructures/output1.png",
            "/Activity_pictures/ControlStructures/output2.png",
            "/Activity_pictures/ControlStructures/output3.png",
            "/Activity_pictures/ControlStructures/output4.png",
            "/Activity_pictures/ControlStructures/output5.png",
            "/Activity_pictures/ControlStructures/code.png",
          ],
            ["/Activity_pictures/randomnumbers/output1.png",
            "/Activity_pictures/randomnumbers/output2.png",
            "/Activity_pictures/randomnumbers/output3.png",
            "/Activity_pictures/randomnumbers/code.png",
          ],
            ["/Activity_pictures/game/output1.png",
            "/Activity_pictures/game/output2.png",
            "/Activity_pictures/game/output3.png",
            "/Activity_pictures/game/output4.png",
            "/Activity_pictures/game/output5.png",
            "/Activity_pictures/game/output6.png",
            "/Activity_pictures/game/code1.png",
            "/Activity_pictures/game/code2.png",
            "/Activity_pictures/game/code3.png",
            "/Activity_pictures/game/code4.png",
          ],
            ["/Activity_pictures/LaboratoryExercise1/output1.png",
            "/Activity_pictures/LaboratoryExercise1/output2.png",
            "/Activity_pictures/LaboratoryExercise1/output3.png",
            "/Activity_pictures/LaboratoryExercise1/code.png",
          ],
            ["/Activity_pictures/LaboratoryExercise2/output1.png",
            "/Activity_pictures/LaboratoryExercise2/output2.png",
            "/Activity_pictures/LaboratoryExercise2/output3.png",
            "/Activity_pictures/LaboratoryExercise2/output4.png",
            "/Activity_pictures/LaboratoryExercise2/code.png",
          ],
            ["/Activity_pictures/LaboratoryExercise3/output1.png",
            "/Activity_pictures/LaboratoryExercise3/output2.png",
            "/Activity_pictures/LaboratoryExercise3/code1.png",
            "/Activity_pictures/LaboratoryExercise3/code2.png",
            "/Activity_pictures/LaboratoryExercise3/code3.png",
          ],
            ["/Activity_pictures/POS/output1.png",
            "/Activity_pictures/POS/output2.png",
            "/Activity_pictures/POS/output3.png",
            "/Activity_pictures/POS/output4.png",
            "/Activity_pictures/POS/output5.png",
            "/Activity_pictures/POS/output6.png",
            "/Activity_pictures/POS/output7.png",
            "/Activity_pictures/POS/output8.png",
          ],
    ]

    


    // key={Math.random() * 100000}
     return  activities.filter(activity => (parseInt(id) === activity.id))
            .map(item => <div key={item.id} className="activityContent">
                <h1>{item.activityname}</h1>
                <Picture item={item} Pics={Pics}/>
                <Bottomnav item={item} activities={activities}/>
                {/* <img src={} alt="helloo"/> */}
            </div>)

}

export default Activity
