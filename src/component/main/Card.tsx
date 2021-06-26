import {FunctionComponent} from "react";
import Assigness from "../header/Assigness";
import {ICard} from "./data";
import {Draggable, DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";
import {header, headerLeft, headerRight, anchor} from "./card.classname";


interface IProps {
    information: ICard,
    index: number,
}

const Card: FunctionComponent<IProps> = ({information, index}: IProps): JSX.Element => {
    return (<Draggable
        key={information.id}
        draggableId={information.id.toString()}
        index={index}
    >
        {
            (provided: DraggableProvided, snapshot: DraggableStateSnapshot): JSX.Element => (
                <a href="/#" ref={provided.innerRef}
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   className={anchor(snapshot?.isDragging)}
                >
                    <div>
                        <div className={header}>
                            <div className={headerRight}>
                                                <span
                                                    className="text-sm font-medium text-blue-500 leading-">{information.issue}</span>
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
                                <span className="ml-2">{information.attachment}</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm text-gray-800">{information.explanation}</p>
                        </div>
                        <div className="mt-3">
                            <Assigness assigment={information?.assigment}/>
                        </div>
                    </div>
                </a>
            )
        }
    </Draggable>)
}
export default Card
