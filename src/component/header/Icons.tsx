import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";

const container = classnames('flex', 'items-center', 'flex-shrink-0')
const svgButton = classnames('h-6', 'w-6', 'text-gray-600', 'mr-6', 'flex-shrink-0', 'ml-2');
const imgButton = classnames('flex-shrink-0', 'ml-4', 'mr-2')
const img = classnames('w-9', 'h-6', 'object-cover', 'rounded-full')
const Icons: FunctionComponent = () => {
    return (
        <div className={container}>
            <button className={svgButton}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
            </button>
            <button className={imgButton}>
                <img className={img} src={'./logo512.png'} alt='Man 1'/>
            </button>
        </div>)
}
export default Icons
