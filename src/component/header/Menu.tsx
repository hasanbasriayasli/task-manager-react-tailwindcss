import {FunctionComponent, useContext} from "react";
import {classnames} from "tailwindcss-classnames";
import {ToggleSidebarContext} from "../../App";

const button = classnames('text-gray-600', 'lg:hidden');

const Menu: FunctionComponent = () => {
    const {setToggleSidebar} = useContext(ToggleSidebarContext);
    return (
        <button className={button}
                onClick={() => setToggleSidebar && setToggleSidebar(true)}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
    )
}
export default Menu
