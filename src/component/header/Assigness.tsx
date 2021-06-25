import {FunctionComponent} from "react";
import {classnames} from "tailwindcss-classnames";

const container = classnames('sm:flex','sm:items-center')
const h2 = classnames('text-lg', 'font-medium', 'text-gray-500','pr-5');
const img = classnames('w-6', 'h-6', 'rounded-full', 'object-cover');
const span = classnames('border-2', 'border-white', 'rounded-full','-ml-3');
interface IProps{
    assigment?:string[]
}
const Assigness: FunctionComponent<IProps> = ({assigment=dataTemp}:IProps):JSX.Element => {
    return <div className={container}>
        <h2 className={h2}>Assigness</h2>
        <div className={container}>
            {
                assigment.map((item: string,index:number) => <span key={index} className={span}>
                      <img className={img} src={item} alt="Avatar"/>
                   </span>)
            }

        </div>
    </div>
}
export default Assigness
const dataTemp=['./logo192.png', './logo512.png','./logo192.png', './logo512.png']
