import {useState} from "react";

const useActiveTab = (scrumBoard: TypeScrumBoard[]): {
    active: TypeScrumBoard[];
    handleActive: (val: number) => void
} => {
    const [active, setActive] = useState<TypeScrumBoard[]>(scrumBoard);
    const handleActive = (idx: number): void => {
        setActive((prev: TypeScrumBoard[]) => prev.map((item: TypeScrumBoard, index: number) => {
            if (index === idx) {
                return {
                    ...item,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        }))
    }
    return {
        active,
        handleActive
    }
}
export default useActiveTab
export type TypeScrumBoard = {
    name: string;
    count: number;
    active: boolean
}
