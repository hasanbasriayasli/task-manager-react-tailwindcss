import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";
import Assigness from "../header/Assigness";

const a = classnames('block', 'p-5', 'rounded-md', 'bg-white', 'shadow');
const header = classnames('flex', 'items-baseline', 'justify-between')
const headerRight = classnames('px-3', 'py-1', 'bg-blue-200', 'rounded');
const headerLeft = classnames('flex', 'items-center', 'text-sm', 'text-gray-400');
const Card: FunctionComponent = () => {
    return (<a href="/#" className={a}>
        <div>
            <div className={header}>
                <div className={headerRight}>
                    <span className="text-sm font-medium text-blue-500 leading-">DESIGN</span>
                </div>
                <div className={headerLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-4 w-4"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                    </svg>
                    <span className="ml-2">
                        2
                    </span>
                </div>
            </div>
            <div className="mt-3">
                <p className="text-sm text-gray-800">
                    Product illustration to symbolize bring people together...
                </p>
            </div>
            <div className="mt-3">
                <Assigness/>
            </div>
        </div>
    </a>)
}
export default Card
