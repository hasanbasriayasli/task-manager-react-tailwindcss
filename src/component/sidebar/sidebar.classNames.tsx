import {classnames} from "tailwindcss-classnames";


export const img = classnames('w-9', 'h-6', 'border-r',)
export const nav = classnames('mt-8')
export const navHeader = classnames('text-sm', 'font-semibold', 'text-gray-600', 'uppercase', 'tracking-wide');
export const anchor = classnames('flex', 'justify-between' ,'items-center', 'px-3','py-2');
export const anchorActive = classnames('bg-gradient-to-r','from-purple-700','to-blue-500','rounded-lg');
export const scrumBoardActive = (active:boolean)=>classnames(anchor,{
    [anchorActive]:active
});
