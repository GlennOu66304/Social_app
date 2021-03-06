import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@material-ui/icons';
import { useContext, useRef, useState } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios'
export default function Share() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null);
    const axionsInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('name', fileName)
            data.append('file', file)
            newPost.img = fileName;
            try {
                await axionsInstance.post("/upload", data);
            } catch (err) {
                console.log(err)
            }

        }

        try {
            await axionsInstance.post("/posts", newPost)
            window.location.reload()
        } catch (err) {

        }

    }
    return (
        <div className='share'>

            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF + '/person/noAvatar.png'} alt='' />
                    <input className='shareInput' placeholder={"what's in your mind " + user.username + "?"}
                        ref={desc} />
                </div>
                <hr className='shareHr' />

                {
                    file && (
                        <div className="shareImgContainer">
                            <img className='shareImg' src={URL.createObjectURL(file)} alt='' />
                            <Cancel className='shareCancelImg' onClick={() => setFile(null)} />
                        </div>
                    )
                }

                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={
                                { display: "none" }}
                                type='file'
                                id='file'
                                accept=".png,.jpeg,.jpg"
                                onChange={
                                    (e) => setFile(e.target.files[0])

                                } />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Tags</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Locations</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton' type="submit">share</button>
                </form>
            </div>
        </div>
    )
}
