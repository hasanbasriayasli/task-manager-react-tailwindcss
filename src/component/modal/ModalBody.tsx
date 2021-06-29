import { FunctionComponent } from "react";

interface IProps {
    children: JSX.Element;
}
const ModalBody: FunctionComponent<IProps> = ({ children }: IProps): JSX.Element => {
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white">
                <div className="border-0 w-64 p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default ModalBody