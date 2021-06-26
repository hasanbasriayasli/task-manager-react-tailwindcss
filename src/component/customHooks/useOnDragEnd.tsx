import {ICard, IItems} from "../main/data";
import {useState} from "react";


const useOnDragEnd=(items:IItems[])=>{
    const [state, setState] = useState<IItems[]>(items);
    const onDragEnd = (result: any) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;
        if(sInd===dInd){
            const items = reorder(state[sInd]?.cards, source.index, destination.index);
            const newState=[...state];
            newState[sInd].cards= items;
            setState(newState);
        } else {
            const result = move(state[sInd].cards, state[dInd].cards, source, destination);
            const newState = [...state];
            newState[sInd].cards = result[sInd];
            newState[dInd].cards = result[dInd];

        }
    }
    return{
        state,
        onDragEnd
    }
}
export default useOnDragEnd
function reorder(list:ICard[],startIndex:number,endIndex:number){
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}
function move(source:ICard[],destination:ICard[],droppableSource:TypeDroppable,droppableDestination:TypeDroppable){
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result:any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
}
type TypeDroppable={
    index:number;
    droppableId: string
}
