import React, { Component } from 'react'

export class ChildComp extends Component {

    render() {
        return (
            <div>
                <button type="button" onClick={()=>this.props.GreetParent('Rejwanul Reja')}> Greet Parent</button>
            </div>
        )
    }
}

export default ChildComp
