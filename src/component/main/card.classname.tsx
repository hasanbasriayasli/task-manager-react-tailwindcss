import {classnames} from "tailwindcss-classnames";

export const dragging = classnames('text-white', 'bg-gradient-to-r', 'from-gray-300', 'to-blue-100')
export const anchor = (isDragging: boolean) => classnames('block', 'p-5', 'bg-white', 'rounded-md', 'shadow', {
    [dragging]: isDragging,
});
export const header = classnames('flex', 'items-baseline', 'justify-between')
export const headerRight = classnames('px-3', 'py-1', 'bg-blue-200', 'rounded');
export  const headerLeft = classnames('flex', 'items-center', 'text-sm', 'text-gray-400');
