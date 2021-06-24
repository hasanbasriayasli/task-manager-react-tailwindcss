import React from 'react';
import './App.css';
import Sidebar from "./component/sidebar/Sidebar";
import {classnames} from "tailwindcss-classnames";
import Header from "./component/header/Header";

const app = classnames('flex', 'h-screen',)

function App() {
    return (
        <div className={app}>
            <Sidebar/>
            <div className={'flex-1 min-w-0'}>
                <Header/>
            </div>
        </div>
    );
}

export default App;
