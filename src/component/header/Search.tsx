import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";

const container = classnames('relative', 'w-64');
const span = classnames('absolute','inset-y-0','left-0','flex','items-center','pl-3')
const input = classnames('block','w-full','text-sm','border-gray-400','border',
    'rounded-md','py-2','pl-10','pr-4','placeholder-gray-400')
const Search: FunctionComponent = (): JSX.Element => {
    return (<div className={container}>
        <span className={span}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                 <path strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                 />
            </svg>
        </span>
        <input
            className={input}
            placeholder={"Search"}
        />
    </div>)
}
export default Search
