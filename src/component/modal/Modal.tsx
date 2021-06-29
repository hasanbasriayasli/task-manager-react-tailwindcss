import { Dispatch, FunctionComponent, SetStateAction, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalBody from "./ModalBody";

const modalElement = document.querySelector("#modal-root") as any;
interface IProps {
    children: JSX.Element;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
}
const Modal:FunctionComponent<IProps> = ({ children, setIsOpen, isOpen }: IProps): JSX.Element => {
    const handleEscape = useCallback((e: KeyboardEvent) => {
        console.log(e.key)
        if (e.key === "Escape" || e.key==='27') setIsOpen(false);
    }, [setIsOpen])
    console.log(isOpen,'333')
    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false);
        return () => {
            document.removeEventListener('keydown', handleEscape, false);
        }
    }, [handleEscape, isOpen])
    return (createPortal(
        isOpen ? <ModalBody children={children}/> : null,
        modalElement
    ))
}
export default Modal;