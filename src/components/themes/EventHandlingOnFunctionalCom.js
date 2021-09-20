import ParentComp from "./fundamentals/ParentComp";

export default function EventHandlingOnFunctionalCom() {

    const clickEvent=()=>{
        console.log('Button clicked');
    }

    return (
        <div>
            <button type="button" onClick={()=>clickEvent()}>Click</button>
            <ParentComp/>
        </div>
    )
}