import {FunctionComponent} from "react";
import * as styles from './header.className';
import Search from "./Search";
import Icons from "./Icons";
import {classnames} from "tailwindcss-classnames";
import Assigness from "./Assigness";
import Buttons from "./Buttons";
const container = classnames('flex',  'justify-between', 'items-center','py-3')
const Header:FunctionComponent=()=>{
    return(
        <header className={styles.header}>
            <div className={container}>

                <Search/>
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
