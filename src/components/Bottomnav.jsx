import {Link} from "react-router-dom"

const Bottomnav = ({item, activities}) => {
    return (
        <div className="bottomNav">
            {(item.id > 1) && <Link to={`/activities/${item.id-1}`}>Previous</Link>}
            {(item.id < activities.length) &&<Link to={`/activities/${item.id+1}`}>Next</Link>}
        </div>
    )
}

export default Bottomnav
