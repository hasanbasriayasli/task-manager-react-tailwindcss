import {FunctionComponent} from "react";
import Cards from "./Cards";
import {DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot} from "react-beautiful-dnd";
import { IItems, items} from "./data";
import useOnDragEnd from "../customHooks/useOnDragEnd";
import {container, h3, main, todo} from "./main.classname";



const Main: FunctionComponent = () => {
   const {state,onDragEnd}= useOnDragEnd(items);
    return <div className={container}>
           <main className={main}>
               <DragDropContext onDragEnd={onDragEnd}>
                   {
                       state.map((item:IItems,ind:number)=>{
                           return(
                               <Droppable key={ind} droppableId={`${ind}`}>
                                   {(provided:DroppableProvided, snapshot:DroppableStateSnapshot)=>(
                                       <div
                                           ref={provided.innerRef}
                                           className={todo(snapshot?.isDraggingOver)}
                                           {...provided.droppableProps}
                                       >
                                           <h3 className={h3}>{item.section}</h3>
                                           <Cards list={item.cards} />
                                       </div>
                                   )}
                               </Droppable>
                           )
                       })
                   }
               </DragDropContext>
        </main>
    </div>
}
export default Main
