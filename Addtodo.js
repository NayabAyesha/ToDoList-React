import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Addtodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle adding the new todo here
        console.log("Title:", title);
        console.log("Description:", desc);
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        props.addtodo(title, desc);
        // Clear the inputs after submission
        setTitle('');
        setDesc('');
    }

    return (
        <div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <Link to="/">ADD a ToDo</Link>
                    <label htmlFor="title1">TITLE: </label><br/>
                    <input
                        type="text"
                        className="form-control"
                        id="title1"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-describedby="emailHelp"
                    />
                    <div className="form-group"> 
                        <label htmlFor="title2">DESCRIPTION: </label><br/>
                        <textarea
                            className="form-control"
                            id="title2"
                            rows="3"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                        <br/><br/>
                    <button id="add" type="submit" className="add">ADD</button>
                    <br /><br />
                    </div>
        
                </form>
            </div>
        </div>
    );
}

export default Addtodo;
