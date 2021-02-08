import React, { useState } from 'react'
import APIService from '../APIService'

function Form(props) {
    const [title, setTitle] = useState(props.article.title)
    const [description, setDescription] = useState(props.article.description)

    const updateArticle = () => {
        APIService.updateArticle(props.article.id, { title, description })
            .then(resp => console.log(resp))


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

                    </textarea>
                    <button className="btn btn-info" onClick={updateArticle} >Update article</button>
                    <br />
                </div>
            ) : null
            }
        </div >
    )
}

export default Form
