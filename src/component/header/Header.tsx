import {FunctionComponent} from "react";
import Search from "./Search";
import Icons from "./Icons";
import {classnames} from "tailwindcss-classnames";
import Assigness from "./Assigness";
import Buttons from "./Buttons";
import Menu from "./Menu";
const container = classnames('flex',  'justify-between', 'items-center','min-w-0','py-3');
export const header = classnames( 'px-6', 'border-b', 'border-gray-200');

const Header:FunctionComponent=()=>{
    return(
        <div className="flex-shrink-0">
        <header className={header}>
            <div className={container}>
                <div className="flex flex-shrink-1 items-center py-2">
                    <Menu/>
                    <Search/>
                </div>
                <Icons/>
            </div>
            <div className={container}>
                <Assigness/>
                <Buttons/>
            </div>
        </header>
        </div>
    )
}
export default Header
