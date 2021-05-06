import wallpaper from "../wallpaper.png"
import wallpaper2 from "../wallpaper2.png"
const Showcase = ({onClick,Onchange}) => {
    return (
        <div className={Onchange === true ?"showcase2" : "showcase"} style={{backgroundImage: `url(${Onchange === true ? wallpaper2 : wallpaper})` }} onClick={onClick} >
            <div className={Onchange === true ? "showcaseContent2" : "showcaseContent"}>
                <h1>Alphy Jay Paulin</h1>
                {!Onchange && <h2>Online Portfolio</h2>}
                <p>click the box</p>
            </div>
        </div>
    )
}

export default Showcase
