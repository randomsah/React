import React from 'react'
export default function counter (){
    function Inc(){
        document.getElementsByTagName('div'[0].innerText="Hello");
    }
    return(
        <>
        <div>Counter</div>
        <button onClick={Inc}>Click Here
        </button></>
    )
}
