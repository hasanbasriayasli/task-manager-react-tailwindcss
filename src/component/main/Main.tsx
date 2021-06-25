import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";
import Cards from "./Cards";
import {IItems, items} from "./data";

const container = classnames('flex-1', 'bg-gray-50', 'overflow-auto');
const h3 = classnames('px-3', 'pt-3', 'pb-1', 'text-2xl', 'font-medium', 'text-gray-700', 'leading-tight', 'font-mono');
const todo = classnames('flex', 'flex-col', 'w-80', 'bg-transparent', 'rounded-md');
const main = classnames('p-3', 'h-full', 'inline-flex', 'space-x-2', 'overflow-hidden');

const Main: FunctionComponent = () => {
    return <div className={container}>
        <main className={main}>
            {
                items.map((item:IItems,index:number):JSX.Element=>{
                   return <div key={index} className={todo}>
                        <h3 className={h3}>{item.section}</h3>
                        <Cards list={item.cards}/>
                    </div>
                })
            }
        </main>
    </div>
}
export default Main
