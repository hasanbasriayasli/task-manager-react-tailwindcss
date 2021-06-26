import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";
import Card from "./Card";
import {ICard} from "./data";

const container = classnames('flex-1','min-h-0','overflow-y-auto');
const ul = classnames('px-3','pt-3','pb-3');
const li = classnames('mt-1');

interface IProps{
    list:ICard[]
}

const Cards: FunctionComponent<IProps> = ({list}:IProps):JSX.Element => {
    return (
        <div className={container}>
            <ul className={ul}>
                {
                    list.map((item:ICard,index:number):JSX.Element=> <li key={index} className={li}>
                        <Card information={item} index={index}/>
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Cards
