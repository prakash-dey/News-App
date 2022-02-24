import React from 'react';


function Reaction({commentCounter, incrementLike, likeCounter}){
    return(
        <div className="reaction-container">
            <a className="like" href="/" onClick={incrementLike}>
                {
                likeCounter === 0 ? 
                <i className="far fa-heart fa-2x"></i>
                    : 
                <i className="fas fa-heart fa-2x"></i>
                }
            </a>
            <span className="like-counter">{likeCounter}</span>
            <a className="comment" href="/">
                <i className="fas fa-comment fa-2x"></i>
            </a>
            <span className="comment-counter">{commentCounter}</span>
        </div>
    );        
}

export default Reaction