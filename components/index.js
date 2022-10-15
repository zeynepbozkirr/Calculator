import { useState, useRef, useEffect } from "react";
import styles from "./component.module.css";

export default function Calculator() {
  const valueARR = [
    {
      value: 9,
      type: "number",
    },
    {
      value: 8,
      type: "number",
    },
    {
      value: 7,
      type: "number",
    },
    {
      value: 6,
      type: "number",
    },
    {
      value: 5,
      type: "number",
    },
    {
      value: 4,
      type: "number",
    },
    {
      value: 3,
      type: "number",
    },
    {
      value: 2,
      type: "number",
    },
    {
      value: 1,
      type: "number",
    },
    {
      value: 0,
      type: "number",
    },
    {
      value: ".",
      type: "number",
    },
    {
      value: "+",
      type: "operation",
    },
    {
      value: "-",
      type: "operation",
    },
    {
      value: "*",
      type: "operation",
    },
    {
      value: "/",
      type: "operation",
    },
    {
      value: "=",
      type: "operation",
    },
    {
      value: "C",
      type: "operation",
    },
    {
      value: "+/-",
      type: "operation",
    },
  ];
  const [val, setVal] = useState(0);
  const [result, setResult] = useState(0);
  const [opr, setOpr] = useState("");

  const onClickNum = (number) => {
    if (val !== "0.") {
      setVal((val + number).toString());
      // setVal((prevState) => (prevState + number).toString());
      console.log(typeof number, "nnn");
    } else {
      if (number !== ".") {
        setVal((val + number).toString());
      }
    }
  };
  const onClickOpr = (operation) => {
    if (
      operation !== "=" &&
      operation !== "C" &&
      operation !== "+/-" &&
      operation !== ","
    ) {
      setOpr(operation);
      setVal(0);

      if (result) {
        setResult(result);
      } else {
        setResult(val);
      }
    } else if (operation === "+/-") {
      console.log(opr, "opr +-");
      setVal((val * -1).toString());
      setResult(val);
    } else if (operation === "C") {
      setVal(0);
      setResult(0);
    } else if (operation === "=") {
      if (!val) {
        setVal(result);
        setResult(
          eval(`${result}
             ${opr}
             ${result}`)
        );
      } else {
        setResult(
          eval(`${result}
             ${opr}
             ${val}`)
        );
      }
    }
  };
  return (
    <div className={styles.container}>
      <div>
        val: {val}/{result}
        <br />
      </div>

      <div className={styles.button}>
        {valueARR.map((num, i) => (
          <button
            value={num.value}
            key={i}
            onClick={() => {
              num.type === "number"
                ? onClickNum(num.value)
                : onClickOpr(num.value);
            }}
          >
            {num.value}
          </button>
        ))}
      </div>
    </div>
  );
}
