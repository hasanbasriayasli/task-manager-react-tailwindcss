import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";

const container= classnames('flex','items-center','flex-shrink-0','ml-8')
const button1 = classnames('pl-2', 'pr-4', 'py-2', 'rounded-md',
    'text-sm', 'font-medium', 'text-white', 'bg-gray-900',
    'hover:bg-gray-800')
const button2 = classnames('flex','items-center','ml-2','pl-2', 'pr-4', 'py-2', 'rounded-md',
    'text-sm', 'font-medium', 'text-white','bg-gradient-to-r','from-purple-700', 'to-blue-500',
    'hover:to-blue-300','hover:from-purple-400')
const Buttons: FunctionComponent = () => {
    return (
        <div className={container}>
            <button className={button1}>
                Complete Sprint
            </button>
            <button className={button2}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <span>
                    New Item
                </span>
            </button>
        </div>
    )
}
export default Buttons
