import Activities from "./components/Activities"
import Header from "./components/Header"
import Showcase from "./components/Showcase"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Activity from "./components/Activity";
import {useState} from "react"
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [Onchange,setOnchange] = useState(false)
  const activities = [
    {
        id:1,
        activityname:"Activity 1",
        pictures:["../Activity_pictures/Activity1/output1.png","../Activity_pictures/Activity1/code1.png"],
    },
    {
        id:2,
        activityname:"Activity 2",
        pictures:["./Activity_pictures/Activity2/output.png","./Activity_pictures/Activity2/code.png"]
        
    },
    {
        id:3,
        activityname:"Activity 3",
        pictures:["/Activity_pictures/Activity3/output.png","/Activity_pictures/Activity3/code.png",],
    },
    {
        id:4,
        activityname:"Activity 4",
        pictures:["/Activity_pictures/Activity4/OUTPUT.png","/Activity_pictures/Activity4/CODE.png"],
    },
    {
        id:5,
        activityname:"Activity 5",
        pictures:["/Activity_pictures/Activity5/OUTPUT.png","/Activity_pictures/Activity5/CODE.png"],
    },
    {
        id:6,
        activityname:"Activity 6",
        pictures:["/Activity_pictures/Activity6/add.png",
        "/Activity_pictures/Activity6/sub.png",
        "/Activity_pictures/Activity6/mult.png",
        "/Activity_pictures/Activity6/div.png",
        "/Activity_pictures/Activity6/expo.png",
        "/Activity_pictures/Activity6/modul.png",
        "/Activity_pictures/Activity6/output1.png",
        "/Activity_pictures/Activity6/output2.png",
        "/Activity_pictures/Activity6/output3.png",
      ],
    },
    {
        id:7,
        activityname:"Activity 7",
        pictures:["/Activity_pictures/Activity7/OutPut.png",
        "/Activity_pictures/Activity7/areaTriangle.png",
        "/Activity_pictures/Activity7/areaCircle.png",
        "/Activity_pictures/Activity7/areaRectangle.png",
        "/Activity_pictures/Activity7/volumeCone.png",
        "/Activity_pictures/Activity7/volumeCylinder.png",
        "/Activity_pictures/Activity7/arithmetic.png",
        "/Activity_pictures/Activity7/arithmeticForm.png",
      ],
    },
    {
        id:8,
        activityname:"Control Structures",
        pictures:["/Activity_pictures/ControlStructures/output1.png",
        "/Activity_pictures/ControlStructures/output2.png",
        "/Activity_pictures/ControlStructures/output3.png",
        "/Activity_pictures/ControlStructures/output4.png",
        "/Activity_pictures/ControlStructures/output5.png",
        "/Activity_pictures/ControlStructures/code.png",
      ],
    },
    {
        id:9,
        activityname:"Random Numbers",
        pictures:["/Activity_pictures/randomnumbers/output1.png",
        "/Activity_pictures/randomnumbers/output2.png",
        "/Activity_pictures/randomnumbers/output3.png",
        "/Activity_pictures/randomnumbers/code.png",
      ],
    },
    {
        id:10,
        activityname:"Game",
        pictures:["/Activity_pictures/game/output1.png",
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
    },
    {
        id:11,
        activityname:"Excercise 1",
        pictures:["/Activity_pictures/LaboratoryExercise1/output1.png",
        "/Activity_pictures/LaboratoryExercise1/output2.png",
        "/Activity_pictures/LaboratoryExercise1/output3.png",
        "/Activity_pictures/LaboratoryExercise1/code.png",
      ],
    },
    {
        id:12,
        activityname:"Excercise 2",
        pictures:["/Activity_pictures/LaboratoryExercise2/output1.png",
        "/Activity_pictures/LaboratoryExercise2/output2.png",
        "/Activity_pictures/LaboratoryExercise2/output3.png",
        "/Activity_pictures/LaboratoryExercise2/output4.png",
        "/Activity_pictures/LaboratoryExercise2/code.png",
      ],
    },
    {
        id:13,
        activityname:"Excercise 3",
        pictures:["/Activity_pictures/LaboratoryExercise3/output1.png",
        "/Activity_pictures/LaboratoryExercise3/output2.png",
        "/Activity_pictures/LaboratoryExercise3/code1.png",
        "/Activity_pictures/LaboratoryExercise3/code2.png",
        "/Activity_pictures/LaboratoryExercise3/code3.png",
      ],
    },
    {
        id:14,
        activityname:"POS SYSTEM",
        pictures:["/Activity_pictures/POS/output1.png",
        "/Activity_pictures/POS/output2.png",
        "/Activity_pictures/POS/output3.png",
        "/Activity_pictures/POS/output4.png",
        "/Activity_pictures/POS/output5.png",
        "/Activity_pictures/POS/output6.png",
        "/Activity_pictures/POS/output7.png",
        "/Activity_pictures/POS/output8.png",
      ],
    },
    
]


const onClick = (e) => {
  if (e.target.classList.contains("showcaseContent2") || e.target.classList.contains("showcaseContent") ){
    setOnchange(!Onchange)
  }
}

  return (
    <Router>
      <ScrollToTop/>
      <div className="Container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Showcase onClick={onClick} Onchange={Onchange}/>
        </Route>
        <Route exact path="/Activities">
          <Activities activities={activities} />
        </Route>
        <Route path="/Activities/:id">
          <Activity activities={activities}/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
