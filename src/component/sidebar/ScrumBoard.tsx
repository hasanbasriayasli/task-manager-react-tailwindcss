import {FunctionComponent} from "react";
import * as styles from "./sidebar.classNames";
import useActiveTab, {TypeScrumBoard} from "../customHooks/useActiveTab";

const scrumBoard: TypeScrumBoard[] = [
    {name: 'Backlog', count: 23, active: false},
    {name: 'Active Sprints', count: 1, active: true},
    {name: 'Reports', count: 13, active: false},
]
const ScrumBoard: FunctionComponent = ():JSX.Element => {
   const {active,handleActive}= useActiveTab(scrumBoard);
    return (
        <>
            <h3 className={styles.navHeader}>
                Scrum Board
            </h3>
            <div className="mt-2 -mx-3">
                {
                    active.map((item: TypeScrumBoard, index: number) => {
                        return (
                            <a href="/#"
                               key={index}
                               className={styles.scrumBoardActive(item?.active)}
                               onClick={() => handleActive(index)}
                            >
                                    <span
                                        className={`text-sm font-medium 
                                                   text-${item?.active ? 'white' : 'gray-500'}`}>
                                        {item.name}
                                    </span>
                                <span className={`text-sm font-semibold 
                                                   text-${item?.active ? 'white' : 'gray-500'}`}>{item.count}</span>
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ScrumBoard

