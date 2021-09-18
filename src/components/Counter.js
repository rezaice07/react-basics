import React from 'react'
import {connect} from 'react-redux'
import {Increament,Decreament} from '../reduct-services/actions/counterAction'

function Counter({Increament,Decreament,count}) {
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={()=>Increament(5)}>Increament</button>
            <button onClick={()=>Decreament(1)}>Decreament</button>
        </div>
    )
}

const mapStateToProps=(state)=>({
    count:state.counterReducer.count
})

export default connect(mapStateToProps,{Increament,Decreament})(Counter)
