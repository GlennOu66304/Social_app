import React from 'react'
import "./conversation.css"
// 2.import useEffect, useState  Hooks
import { useEffect, useState } from "react";
// 1.import axios
import axios from 'axios'
export default function Conversation({ conversation, currentUser }) {
    // 3.useState initial
    const [user, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    // 4.useEffect to fetch the data
    useEffect(() => {//4.1this is a funcion{},() inside of the useEffect()Hook

        const friendId = conversation.members.find((m) => m !== currentUser._id)
        // 4.2 fetch data function defined

        const getUser = async () => {//try catch mode to get the data
            try {
                const res = await axios('/users?userId=' + friendId)
                console.log(res)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        // 4.3call back the function
        getUser();
    }, [currentUser, conversation]);

    return (
        <>
            <div className="conversation">
                <img src={user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="conversationImg" />
                <span className="conversationName">{user?.username}</span>
            </div>
        </>
    )
}
