import React, { Component } from 'react'
import EventHandlingOnFunctionalCom from './EventHandlingOnFunctionalCom'
import Car from '../Cars'

class Forms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    submitForm = () => {

        var mycar = new Car();
        mycar.getPosts().then(response => {
            console.log(response);
            this.setState({ posts: response })
        })

        console.log(mycar.hello());


    }


    render() {
        const { posts } = this.state;

        return (

            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="button" onClick={() => this.submitForm()}>Submit form</button>
                </div>

                <hr />
                <EventHandlingOnFunctionalCom />


                List Of Posts
                {
                    posts.length && (
                        <table className='table'>
                            <thead>
                                <tr><th>Title</th><th>Body</th></tr>
                            </thead>
                            <tbody>
                                {
                                    posts.length ?
                                        posts.map(post => <tr key={post.id}><td>{post.title}</td><td>{post.body}</td></tr>)
                                        : <tr><td colSpan={2}>There are no posts to show.</td></tr>
                                }
                            </tbody>
                        </table>
                    )
                }
            </form>

        )
    }
}

export default Forms






