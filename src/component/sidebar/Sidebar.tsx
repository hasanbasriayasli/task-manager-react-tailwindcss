import {FunctionComponent} from "react";
import * as styles from './sidebar.classNames'
import ScrumBoard from "./ScrumBoard";
import Tags from "./Tags";


const Sidebar: FunctionComponent = (): JSX.Element => {

    return (
        <div className={styles.container}>
            <div>
                <img src={'./logo512.png'} alt="Logo" className={styles.img}/>
            </div>
            <nav className={styles.nav}>
                <ScrumBoard/>
                <Tags/>
            </nav>
        </div>
    )
}
export default Sidebar
