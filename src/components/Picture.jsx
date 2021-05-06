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

const Picture = ({Pics,item}) => {

     const pics = (id) =>{
        switch(id){
            case 1:
                 return(<>
                     <img src={activity1.output1} alt=""/> 
                     <img src={activity1.code1} alt=""/>
                </>)
                break;
            case 2:
                 return(<>
                    <img src={activity2.output2} alt=""/>
                    <img src={activity2.code2} alt=""/>
                 </>)
                 break;
            case 3:
                return(<>
                    <img src={activity3.output3} alt=""/>
                    <img src={activity3.code3} alt=""/>
                 </>)
                 break;
            case 4:
                return(<>
                    <img src={activity4.output4} alt=""/>
                    <img src={activity4.code4} alt=""/>
                 </>)
                 break;
            case 5:
                return(<>
                    <img src={activity5.output5} alt=""/>
                    <img src={activity5.code5} alt=""/>
                 </>)
                 break;
            case 6:
                return(<>
                    <img src={activity6.add} alt=""/>
                    <img src={activity6.sub} alt=""/>
                    <img src={activity6.mult} alt=""/>
                    <img src={activity6.expo} alt=""/>
                    <img src={activity6.modul} alt=""/>
                    <img src={activity6.div} alt=""/>
                    <img src={activity6.output1} alt=""/>
                    <img src={activity6.output2} alt=""/>
                    <img src={activity6.output3} alt=""/>
                 </>)
                 break;
            case 7:
                return(<>
                    <img src={activity7.OutPut} alt=""/>
                    <img src={activity7.areTriangle} alt=""/>
                    <img src={activity7.areaCircle} alt=""/>
                    <img src={activity7.areaRectangle} alt=""/>
                    <img src={activity7.volumeCone} alt=""/>
                    <img src={activity7.volumeCylinder} alt=""/>
                    <img src={activity7.arithmetic} alt=""/>
                    <img src={activity7.arithmeticForm} alt=""/>
                 </>)
                 break;
            case 8:
                return(<>
                    <img src={ControlStructure.output1} alt=""/>
                    <img src={ControlStructure.output2} alt=""/>
                    <img src={ControlStructure.output3} alt=""/>
                    <img src={ControlStructure.output4} alt=""/>
                    <img src={ControlStructure.output5} alt=""/>
                    <img src={ControlStructure.code} alt=""/>
                 </>)
                 break;
            case 9:
                return(<>
                    <img src={randomnumber.output1} alt=""/>
                    <img src={randomnumber.output2} alt=""/>
                    <img src={randomnumber.output3} alt=""/>
                    <img src={randomnumber.code} alt=""/>
                 </>)
                 break;
            case 10:
                return(<>
                    <img src={game.output1} alt=""/>
                    <img src={game.output2} alt=""/>
                    <img src={game.output3} alt=""/>
                    <img src={game.output4} alt=""/>
                    <img src={game.output5} alt=""/>
                    <img src={game.output6} alt=""/>
                    <img src={game.code1} alt=""/>
                    <img src={game.code2} alt=""/>
                    <img src={game.code3} alt=""/>
                    <img src={game.code4} alt=""/>
                 </>)
                break;
            case 11:
                return(<>
                    <img src={LaboratoryExcercise1.output1} alt=""/>
                    <img src={LaboratoryExcercise1.output2} alt=""/>
                    <img src={LaboratoryExcercise1.output3} alt=""/>
                    <img src={LaboratoryExcercise1.code} alt=""/>
                 </>)
                 break;
            case 12:
                return(<>
                    <img src={LaboratoryExcercise2.output1} alt=""/>
                    <img src={LaboratoryExcercise2.output2} alt=""/>
                    <img src={LaboratoryExcercise2.output3} alt=""/>
                    <img src={LaboratoryExcercise2.output4} alt=""/>
                    <img src={LaboratoryExcercise2.code} alt=""/>
                 </>)
                 break;
            case 13:
                return(<>
                    <img src={LaboratoryExcercise3.output1} alt=""/>
                    <img src={LaboratoryExcercise3.output2} alt=""/>
                    <img src={LaboratoryExcercise3.code1} alt=""/>
                    <img src={LaboratoryExcercise3.code2} alt=""/>
                    <img src={LaboratoryExcercise3.code3} alt=""/>
                 </>)
                 break;
            case 14:
                return(<>
                    <img src={POS.output1} alt=""/>
                    <img src={POS.output2} alt=""/>
                    <img src={POS.output3} alt=""/>
                    <img src={POS.output4} alt=""/>
                    <img src={POS.output5} alt=""/>
                    <img src={POS.output6} alt=""/>
                    <img src={POS.output7} alt=""/>
                    <img src={POS.output8} alt=""/>
                 </>)
                 break;
            default:
                <><h1>helloo</h1></>
                break;

         }
     }
    
    return (
    <div className="pictures">
        {/* { Pics.filter((pic,i) => i+1 === item.id).forEach(data => picturedata = data)}
        {picturedata.map(picture => <div className="picture" key={Math.random() * 100000} >
            <img src={require(picture).default} alt={`${picture}`}/>
        </div>)}  */}
        {/* {item.pictures.map(picture => <div className="picture" >
        <img src={require(picture)} alt={`${picture}`}/>
        </div>)} */}
        {pics(item.id)}
        
    </div>
    )
}

export default Picture
