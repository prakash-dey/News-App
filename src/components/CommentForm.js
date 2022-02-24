import React from 'react';
import PropTypes from 'prop-types'

class CommentForm extends React.Component{
    

    render(){

        const{comments, handleChange,handleSubmit, value} = this.props;

        return(
            <div>
                <div>
                    {comments.map((c)=><p key={c.id}>{c.comment}</p>)}
                </div>
                <form className="form-container" onSubmit={handleSubmit}> 
                <input type="text" value={value} placeholder="Enter Comment"  className="comment-box" onChange={handleChange}/>
                <button className="comment-btn"><i className="fas fa-arrow-right fa-2x"></i></button>
                </form>
            </div>
            
        )
    }
}

CommentForm.propTypes={
    handleSubmit: PropTypes.func.isRequired,
}


export default CommentForm