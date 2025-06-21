import React, {Component, useEffect, useRef,useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


function useInputwithValidate(initiallyValue){
    const [value,setValue]=useState(initiallyValue)

    const validateInput=()=>{
        return value.search(/\d/)>=0
    }

    const onChange=(e)=>{
        setValue(e.target.value)
    }

    return {value,onChange,validateInput}
}






const  Form=()=> {

    // const myRef=useRef(null)

    // const [state,setState]=useState(true)

    // const toggle=()=>{
    //     setState(!state)
    // }

    // function focusFirstTI(){
    //     toggle()
    //     if(state){
    //         myRef.current.focus();
    //     }else{
    //         return
    //     }
    // }

    const [state,setState]=useState('')
    const [stateArey,setStateArey]=useState('')

    const input=useInputwithValidate('')
    const textArey=useInputwithValidate('')
    
    const myRef=useRef(1)


    const validateInput=(text)=>{
        return text.search(/\d/)>=0
        // if(text.search(/\d/)>=0){
        //     return true
        // }else{
        //     return false
        // }
    }

    const color=input.validateInput() ? 'text-danger' : null

    // useEffect(()=>{
    //     myRef.current=state
    // })

        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                    <input value={`${input.value} / ${textArey.value}`} type="text" className='form-comtrol'  readOnly/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                        // ref={myRef}
                        onChange={input.onChange}
                         type="email" 
                         value={input.value}
                         className={`form-control ${color}`} 
                         id="exampleFormControlInput1"
                         placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea 
                        // value={myRef.current}  
                        // onClick={focusFirstTI}
                        onChange={textArey.onChange}
                        className="form-control" 
                        id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
}

function Apps() {
    return (
        <Form/>
    );
}

export default Apps;