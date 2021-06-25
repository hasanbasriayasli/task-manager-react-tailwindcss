import {FunctionComponent, useContext} from "react";
import * as styles from './sidebar.classNames'
import ScrumBoard from "./ScrumBoard";
import Tags from "./Tags";
import {classnames} from "tailwindcss-classnames";
import {ToggleSidebarContext} from "../../App";

const container = classnames('fixed','inset-y-0','left-0','lg:static',
    'w-64', 'px-8', 'py-4','mt-2','z-50','bg-white',
    'border-r','overflow-auto',
    // @ts-ignore
    'lg:translate-x-0','transform');
// @ts-ignore
const openToggle = classnames('translate-x-0','ease-out','transition-medium');
// @ts-ignore
const closeToggle = classnames('-translate-x-full','ease-in','transition-medium');
const logo = classnames('flex','justify-between','items-center');
const button = classnames('bg-gray-700','lg:hidden');

const Sidebar: FunctionComponent = (): JSX.Element => {
    const {isOpen,setToggleSidebar} = useContext(ToggleSidebarContext);
    const toggleSidebar = (open:boolean)=>{
        return classnames(container,{
            [openToggle]:open,
            [closeToggle]:!open
        })
    }
    return (
        <div className={toggleSidebar(isOpen)}>
            <div className={logo}>
                <img src={'./logo512.png'} alt="Logo" className={styles.img}/>
                <button className={button}
                        onClick={() => setToggleSidebar && setToggleSidebar(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-6 w-6"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <nav className={styles.nav}>
                <ScrumBoard/>
                <Tags/>
            </nav>
        </div>
    )
}
export default Sidebar

