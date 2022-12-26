import React from 'react'
import { useRef } from "react";
import {useState} from 'react'

const SelectYear = (props) => {

    const selectRef = useRef();
    const [year,setYear]= useState();
    let displayYear = props.displayYear()

    return (
        <div className='topHome container-fluid '>
            <div className="container-md ">
                <div className="row col-lg-2 col-md-4 col-4">
                   <h2 className='topYear mb-2 mt-2 text-[25px]'>Top Yaer :</h2>

                    <select ref={selectRef} className='form-select mb-2'>
                        <option value="#">select-year...  </option>
                    </select>
                </div>
            </div>
           
        </div>
    )
}

export default SelectYear