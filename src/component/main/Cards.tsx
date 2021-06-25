import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";
import Card from "./Card";

const container = classnames('flex-1','min-h-0','overflow-y-auto');
const ul = classnames('px-3','pt-3','pb-3');
const li = classnames('mt-1');
interface IProps{
    list:number[]
}
const Cards: FunctionComponent<IProps> = ({list}:IProps):JSX.Element => {
    return (
        <div className={container}>
            <ul className={ul}>
                {
                    list.map((item:number):JSX.Element=> <li key={item} className={li}>
                        <Card/>
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Cards
