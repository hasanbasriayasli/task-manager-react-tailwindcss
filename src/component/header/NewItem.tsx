import { FunctionComponent, useState } from "react";
import Modal  from "../modal/Modal";
import { container, newItem } from "./newItem.classname";


const NewItem: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className={container}>
                <button className={newItem}
                    onClick={() =>{
                        console.log(isOpen,'1');
                        setIsOpen(true)}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>
                        New Item
                    </span>
                </button>
            </div>
            <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                <p>The under construction. You can press ESC to turn it off.</p>
            </Modal>
        </>
    )
}
export default NewItem
