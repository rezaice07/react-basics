import React, { Component } from 'react'
import Car from '../Cars'

export class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {

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
            <>
                <h2>List of Data</h2>
                <div className="table-responsive">
                    {
                        posts.length && (
                            <table className='table table-striped table-sm'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
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
                </div>
            </>
        )
    }
}

export default Dashboard
