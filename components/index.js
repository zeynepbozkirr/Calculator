import {useState, useRef, useEffect} from "react";
import styles from  "./component.module.css"


 function Calculator() {

     const numArr=[9,8,7,6,5,4,3,2,1,0]
     const operationArr=["+","-","*","/","=","C","+/-",","]
     const [val,setVal]  =useState( 0)
     const [result,setResult]  =useState(0)
     const [opr,setOpr]  =useState("")
     const [click,setClick]  =useState(false)


     const onClickNum=(number)=>{

         setVal((val+number).toString())
        //  else{
        //     setVal(0)
        // }
     }
     const onClickOpr = (operation) => {

         if (operation !== "=" && operation !== "C" && operation !==  "+/-"  && operation !==  ",") {
             setOpr(operation)
             setVal(0)

             // if (val){
             // }
             if(result){
                 setResult(result)
             }
             else if(!result){
                 setResult(val)
             }

         }
         if( operation === "+/-"){
             console.log(opr,"opr +-")
             setVal((val * -1).toString())
             setResult(val)
         }
          if(operation === "C"){
             setVal(0)
             setResult(0)
         }
          if(operation === ","){
              setVal(val + ",")
              setResult(val)
          }
         if (operation === "=") {
             if(val<=0){
                 setResult(val)
             }
             else if(val>0) {
                 setResult(eval(`${result}
             ${opr}
             ${val} `))
                 // setVal(0)

             }


         }





     }
     return (
        <div className={styles.container}>
          {numArr.map((num,i)=>
                <button  className={styles.button} value={num}
                        key={i}
                        onClick={()=> {
                            onClickNum(num)
                        }}
                >{num}  {i === 2 || i ===5 || i===8 ? "<br/>":  null }</button>
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