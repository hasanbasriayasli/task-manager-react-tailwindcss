import {FunctionComponent} from "react";
import * as styles from './header.className';
import Search from "./Search";
import Icons from "./Icons";
import {classnames} from "tailwindcss-classnames";
import Assigness from "./Assigness";
import Buttons from "./Buttons";
import Menu from "./Menu";
const container = classnames('flex',  'justify-between', 'items-center','py-3')
const Header:FunctionComponent=()=>{
    return(
        <header className={styles.header}>
            <div className={container}>
                <div className="flex items-center py-2">
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
    )
}
export default Header
