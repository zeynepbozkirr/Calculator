import {useState, useRef, useEffect} from "react";
import styles from  "./component.module.css"


 function Calculator() {

     const numArr=[0,1,2,3,4,5,6,7,8,9]
     const operationArr=["+","-","*","/","="]
     const [val,setVal]  =useState( 0)
     const [result,setResult]  =useState(0)
     const [opr,setOpr]  =useState("")

     const onClickNum=(number)=>{
        if( opr !=="=" || !val){
            setVal((val+number).toString())
        }
     }
     const onClickOpr = (operation) => {


         if (operation !== "=") {
             setOpr(operation)
             setVal(0)

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
             // setVal(0)

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

          val: {val}/
            {result}


        </div>
    )
}
export default Calculator