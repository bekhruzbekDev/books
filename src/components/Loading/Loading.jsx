import "./loading.css"
import Load from "../../assets/icons/loading.svg"
export function Loading(){
    return(
        <div className="loading-container">
            <div className="icon">
            <Load/>
            </div>
        </div>
    )
}