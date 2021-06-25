import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import Sidebar from "./component/sidebar/Sidebar";
import {classnames} from "tailwindcss-classnames";
import Header from "./component/header/Header";
import Main from "./component/main/Main";

const app = classnames('flex', 'h-screen',)
export const ToggleSidebarContext = createContext<{
    setToggleSidebar: Dispatch<SetStateAction<boolean>> | undefined,
    isOpen:boolean
}>({setToggleSidebar: undefined,isOpen:false});

function App() {
    const [isOpen, setToggleSidebar] = useState(false);
    return (
        <div className={app}>
            <ToggleSidebarContext.Provider value={{isOpen,setToggleSidebar}}>
                <Sidebar/>
                <div className={'flex flex-col flex-1 min-w-0'}>
                    <Header/>
                    <Main/>
                </div>
            </ToggleSidebarContext.Provider>
        </div>
    );
}

export default App;
