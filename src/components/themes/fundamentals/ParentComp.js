import React, { Component } from 'react'
import ChildComp from './ChildComp';

export class ParentComp extends Component {

    GreetHanlding = (name) => {
        alert('Greet from Parent Componet '+ name);
    }

    render() {
        return (
            <div>
                 <ChildComp GreetParent={this.GreetHanlding}   />
            </div>
        )
    }
}

export default ParentComp
