import {FunctionComponent} from "react";
import * as styles from "./sidebar.classNames";
import {classnames} from "tailwindcss-classnames";

const tags: TypeTags[] = [
    {name: 'Bug', active: false},
    {name: 'New Feature', active: false},
    {name: 'Marketing', active: false},
    {name: 'Design', active: false},
    {name: 'Research', active: false},
    {name: 'Overdue', active: false},
]
const span = classnames('cursor-not-allowed', 'text-sm', 'font-medium', 'text-gray-500')
const Tags: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <h3 className={styles.navHeader + ' mt-8'}>
                Tags
            </h3>
            <div className="mt-2 -mx-3">
                {
                    tags.map((item: TypeTags, index: number) => {
                        return (
                            <a href="/#"
                               key={index}
                               className={styles.scrumBoardActive(item?.active)}
                            >
                                    <span
                                        className={span}>
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
