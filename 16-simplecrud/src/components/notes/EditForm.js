import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/actions/noteAction';
import useInput from '../../customhook/useInput';
import { useHistory } from 'react-router-dom';

const EditForm = () => {
    const note = useSelector((state)=> state.note);
    console.log("edit form: ", note);
    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({title, content});
        dispatch(updateNote({id:note.id, title, content}))
        resetTitle();
        resetContent();
        history.push();
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New note</h5>

                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label className="active" htmlFor="note_content">Note Content</label>
                </div>
                <button className="btn green">
                    Update
                </button>
            </form>
        </div>
    )
}

export default EditForm
