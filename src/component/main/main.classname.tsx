import {classnames} from "tailwindcss-classnames";

export const todo =(isDraggingOver:boolean)=>{
    const bgColor= isDraggingOver ? 'bg-gray-200':'bg-transparent'
    return classnames('flex', 'flex-col', 'w-80', 'rounded-md',bgColor)
}
export const container = classnames('flex-1', 'bg-gray-50', 'overflow-auto');
export const h3 = classnames('px-3', 'pt-3', 'pb-1', 'text-2xl', 'font-medium', 'text-gray-700', 'leading-tight', 'font-mono');
export const main = classnames('p-3', 'h-full', 'inline-flex', 'space-x-2', 'overflow-hidden');
