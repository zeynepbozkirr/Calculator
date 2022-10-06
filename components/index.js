import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useRef, useEffect} from "react";


 function Calculator() {
     const ref = useRef();




     // const prevCount=usePrevious()


     const numArr=[0,1,2,3,4,5,6,7,8,9]
     const operationArr=["+","-","*","/","="]
     const [val,setVal]  =useState( 0)
     const [result,setResult]  =useState(0)
     const [opr,setOpr]  =useState("")
     const [son,setSon]  =useState(0)


     useEffect(() => {
         ref.current = val;
     },[val]);

     const onClickNum=(number)=>{
        if( opr !=="=" || !val){
            setVal((val+number).toString())
        }
     }
     const onClickOpr = (operation) => {


         if (operation !== "=") {
             setVal(0)
             setOpr(operation)
             if(result){
                 setResult(result)
             }
             else if(!result){
                 setResult(val)
             }
         }
         if (operation === "=") {

             setResult(eval(`${result}
             ${opr}
             ${val} `))

         }



     }
     return (
        <div className={styles.container}>
          {numArr.map((num,i)=>
                <button value={num}
                        key={i}
                        onClick={()=> {
                            onClickNum(num)
                        }}
                >{num}</button>
            )
            }


    {operationArr.map((opr,i)=>
    <button value={opr}
            key={i}
        onClick={()=> {
            onClickOpr(opr)
        }}
    >{opr}   </button>

)}

           {/*{val}*/}
            {result}


        </div>
    )
}
export default Calculator