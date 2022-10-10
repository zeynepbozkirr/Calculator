import {useState, useRef, useEffect} from "react";
import styles from  "./component.module.css"

export default function Calculator() {

     const numArr=[9,8,7,6,5,4,3,2,1,0]
     const operationArr=["+","-","*","/","=","C","+/-",","]
     const [val,setVal]  =useState( 0)
     const [result,setResult]  =useState(0)
     const [opr,setOpr]  =useState("")
     const [click,setClick]  =useState(false)
     const [num, setNum] = useState(0);



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
             if(result){
                 setResult(result)
             }
             else if(!result){
                 setResult(val)
             }

         }

         else  if( operation === "+/-"){
             console.log(opr,"opr +-")
             setVal((val * -1).toString())
             setResult(val)
         }

         else if(operation === "C"){
             setVal(0)
             setResult(0)
         }
         else if(operation === ","){
              setVal(val + ",")
              setResult(val)
          }

         else  if (operation === "=") {
             if(!val){
                 setResult((prevNum) => prevNum)
             }
             else if(val) {
                 setResult(eval(`${result}
             ${opr}
             ${val} `))

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
                >{num}  </button>
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



            <button onClick={() => setNum((prevNum) => prevNum+1 )}>
                Increment
            </button>
            {num}
        </div>
    )
}
