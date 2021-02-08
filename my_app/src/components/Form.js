import React, { useState, useEffect } from 'react'
import APIService from '../APIService'

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.updateArticle(props.article.id, { title, description })
            .then(resp => props.updateInfo(resp))
    }

    const insertArticle = () => {
        APIService.insertArticle({ title, description })
            .then(resp => props.insertedInfo(resp))
    }


    return (
        <div>
            {props.article ? (

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Change the title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />

                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>

                    </textarea><br />

                    {
                        props.article.id ?
                            <button className="btn btn-info" onClick={updateArticle} >Update article</button>
                            :
                            <button className="btn btn-primary" onClick={insertArticle} >Submit article</button>
                    }

                    <br />
                </div>
            ) : null
            }
        </div >
    )
}

export default Form
