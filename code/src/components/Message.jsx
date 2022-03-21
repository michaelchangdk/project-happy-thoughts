import React from "react";
import { formatDistance } from 'date-fns'
import parseISO from 'date-fns/parseISO'
import HeartButton from "./HeartButton";

const Message = ({thought, messageLiked, setMessageLiked}) => {
    const timePosted = formatDistance(parseISO(thought.createdAt), new Date(), {addSuffix: true})

    return (
        <>
        <div className="thought-container">
            <div className="top-bar">
                <p className="thought-text">{thought.message}</p>
            </div>
            <div className="bottom-bar">
                <div className="likes-container">
                    <HeartButton 
                        likes={thought.hearts} 
                        id={thought._id} 
                        messageLiked={messageLiked}
                        setMessageLiked={setMessageLiked}
                    />
                </div>
                <div className="time-stamp-container">
                    <p className="time-text">{timePosted}</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Message