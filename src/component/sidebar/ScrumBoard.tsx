import {FunctionComponent, useState} from "react";
import * as styles from "./sidebar.classNames";

const scrumBoard: TypeScrumBoard[] = [
    {name: 'Backlog', count: 23, active: false},
    {name: 'Active Sprints', count: 1, active: true},
    {name: 'Reports', count: 13, active: false},
]
const ScrumBoard: FunctionComponent = ():JSX.Element => {
    const [active, setActive] = useState<TypeScrumBoard[]>(scrumBoard);
    const handleActive = (idx: number): void => {
        setActive((prev: TypeScrumBoard[]) => prev.map((item: TypeScrumBoard, index: number) => {
            if (index === idx) {
                return {
                    ...item,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        }))
    }
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
type TypeScrumBoard = {
    name: string;
    count: number;
    active: boolean
}
