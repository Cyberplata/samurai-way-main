import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://media.istockphoto.com/id/1283376667/photo/autumn-lake-panorama.jpg?s=612x612&w=0&k=20&c=uAWmhFJTwBxCmiQwIwdMkWzjdfHgmicUqp5OauzegvM=" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
