import {FunctionComponent, useState} from "react";
import * as styles from "./sidebar.classNames";

const tags: TypeTags[] = [
    {name: 'Bug', active: false},
    {name: 'New Feature', active: true},
    {name: 'Marketing', active: false},
    {name: 'Design', active: false},
    {name: 'Research', active: false},
    {name: 'Overdue', active: false},
]
const Tags: FunctionComponent = (): JSX.Element => {
    const [active, setActive] = useState<TypeTags[]>(tags);
    const handleActive = (idx: number): void => {
        setActive((prev: TypeTags[]) => prev.map((item: TypeTags, index: number) => {
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
            <h3 className={styles.navHeader + ' mt-8'}>
                Tags
            </h3>
            <div className="mt-2 -mx-3">
                {
                    active.map((item: TypeTags, index: number) => {
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
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Tags
type TypeTags = {
    name: string;
    active: boolean
}
