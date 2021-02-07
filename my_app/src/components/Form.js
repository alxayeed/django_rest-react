import React from 'react'

function Form(props) {
    return (
        <div>
            {props.article ? (

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Please give a new title" />

                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="5"></textarea>
                    <button className="btn btn-info">Update article</button>
                    <br />
                </div>
            ) : null
            }
        </div >
    )
}

export default Form
