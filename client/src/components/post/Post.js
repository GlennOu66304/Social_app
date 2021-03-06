import './post.css'
import { MoreVert } from '@material-ui/icons';
// import {Users} from '../../dummyData'
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
export default function Post({ post }) {
    const [like, setlike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const { user: currentUser } = useContext(AuthContext)
    const axionsInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        const FetchUser = async () => {
            const res = await axionsInstance.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        FetchUser()
    }, [post.userId])

    const likeHandler = () => {
        try {
            axionsInstance.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        }
        catch (err) { }
        setlike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }


    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}> <img className='postProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt='' /></Link>
                        <span className='postUserName'>{user.username}</span>
                        <span className='postDate'>{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF + post.img} alt='' />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={`${PF}like.png`} alt='' onClick={likeHandler} />
                        <img className='likeIcon' src={`${PF}heart.png`} alt='' />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
