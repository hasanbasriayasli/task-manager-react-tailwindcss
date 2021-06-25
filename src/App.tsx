import React from 'react';
import './App.css';
import Sidebar from "./component/sidebar/Sidebar";
import {classnames} from "tailwindcss-classnames";
import Header from "./component/header/Header";
import Main from "./component/main/Main";

const app = classnames('flex', 'h-screen',)

function App() {
    return (
        <div className={app}>
            <Sidebar/>
            <div className={'flex flex-col flex-1 min-w-0'}>
                <Header/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
