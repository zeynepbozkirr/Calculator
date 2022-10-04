import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

 function Calculator() {
    const numArr=[0,1,2,3,4,5,6,7,8,9]
     const [val,setVal]  =useState([])

     const onClickButon=(b)=>{
        setVal(val+b)
         console.log(val,"bbb")
     }


    return (
        <div className={styles.container}>
            {numArr.map((a,index)=>

                <button value={a}
                        key={index}
                        onClick={()=> {
                            onClickButon(a)
                        }}
                >{a}</button>
            )
            }



        </div>
    )
}
export default Calculator