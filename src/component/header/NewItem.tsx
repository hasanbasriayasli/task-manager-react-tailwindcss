import {FunctionComponent} from "react";
import {container, newItem} from "./newItem.classname";


const NewItem: FunctionComponent = () => {
    return (
        <div className={container}>
            <button className={newItem}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>
                    New Item
                </span>
            </button>
        </div>
    )
}
export default NewItem
