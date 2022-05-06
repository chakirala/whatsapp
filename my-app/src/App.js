import React from 'react'

import emojiIcon from './assets/tag_faces.svg'

import doubleCheck from './assets/done_all.svg'

import micIcon from './assets/mic.svg'

import attach from './assets/attach.png'

import './App.css'

function App() {
    return (
        <div className="app">
            <aside>
                <header>
                    <div className="avatar-component">
                        <img
                            className="avatar"
                            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                            alt=""
                        />
                    </div>
                </header>
                <div className="search">
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
                <div className="contact-boxes">
                    <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>

                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Jessica</h3>
                                <span className="time-mark">yesterday</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <header>
                    <div className="avatar-component">
                        <img
                            className="avatar"
                            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                            alt=""
                        />

                        <h3 className="avatar-title">Rishitha</h3>
                    </div>
                </header>
                <div className="chats">
                    <div className="message received">
                        Hi, are you ready for tomorrow's review?
                        <div className="metadata">
                            <span className="date">7:53AM</span>
                        </div>
                    </div>
                    <div className="message sent">
                        Yes, we got it!
                        <div className="metadata">
                            <span className="date">7:55AM</span>
                            <img src={doubleCheck} alt="" className="icon-small" />
                        </div>
                    </div>
                </div>
                <div className="chat-input-box">
                <div className="icon emoji-selector">
                        <img src={emojiIcon} alt="" />
                    </div>
                <div className="icon attachment">
                        <img src={attach} alt="" />
                    </div>

                    <div className="chat-input">
                        <input type="text" placeholder="Type a message" />
                    </div>

                    <div className="icon send">
                        <img src={micIcon} alt="" />
                    </div>
                </div>
            </main>
        </div>
    
    )
}

export default App