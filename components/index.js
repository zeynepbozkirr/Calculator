import { useState, useRef, useEffect } from "react";
import styles from "./component.module.css";
import { Grid, GridItem, Input, Text } from "@chakra-ui/react";

export default function Calculator() {
  const valueARR = [
    {
      value: "C",
      type: "operation",
    },
    {
      value: "CE",
      type: "operation",
    },
    {
      value: "+/-",
      type: "operation",
    },

    {
      value: "/",
      type: "operation",
    },
    {
      value: 7,
      type: "number",
    },
    {
      value: 8,
      type: "number",
    },
    {
      value: 9,
      type: "number",
    },
    {
      value: "*",
      type: "operation",
    },

    {
      value: 4,
      type: "number",
    },
    {
      value: 5,
      type: "number",
    },
    {
      value: 6,
      type: "number",
    },
    {
      value: "-",
      type: "operation",
    },

    {
      value: 1,
      type: "number",
    },
    {
      value: 2,
      type: "number",
    },
    {
      value: 3,
      type: "number",
    },

    {
      value: "+",
      type: "operation",
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
      value: "=",
      type: "operation",
    },
  ];
  const [val, setVal] = useState(0);
  const [result, setResult] = useState(0);
  const [opr, setOpr] = useState("");

  const onClickNum = (number) => {
    var pointControl = val.toString().indexOf("."); // result: 7

    if (number === ".") {
      if (pointControl == -1) {
        setVal((val + number).toString());
      }
    } else {
      setVal((val + number).toString());
    }
  };
  const onClickOpr = (operation) => {
    if (
      operation !== "=" &&
      operation !== "C" &&
      operation !== "+/-" &&
      operation !== "," &&
      operation !== "CE"
    ) {
      setOpr(operation);

      if (result) {
        setResult(result);
      } else {
        setResult(val);
      }
      setVal(0);
    } else if (operation === "+/-") {
      console.log(opr, "opr +-");
      setVal((val * -1).toString());
      setResult(val);
    } else if (operation === "C") {
      setVal(0);
      setResult(0);
      setOpr("");
    } else if (operation === "CE") {
      var sliceValue = val.toString().slice(0, -1);
      setVal(sliceValue);
    } else {
      if (!val) {
        setVal(result);
        setResult(
          eval(`${result}
             ${opr}
             ${result}`)
        );
        console.log("tt");
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
      <Text className={styles.text}>
        {val}
        {opr}
      </Text>

      <Text className={styles.text}>{result}</Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={10}>
        {valueARR.map((num, i) =>
          num.value === 0 ? (
            <GridItem colSpan={2} w="100%" h="50">
              <button
                value={num.value}
                key={i}
                onClick={() => {
                  num.type === "number"
                    ? onClickNum(num.value)
                    : onClickOpr(num.value);
                }}
                className={styles.button}
              >
                {num.value}
              </button>
            </GridItem>
          ) : (
            <GridItem w="50px" h="50">
              <button
                value={num.value}
                key={i}
                onClick={() => {
                  num.type === "number"
                    ? onClickNum(num.value)
                    : onClickOpr(num.value);
                }}
                className={styles.button}
              >
                {num.value}
              </button>
            </GridItem>
          )
        )}
      </Grid>
    </div>
  );
}
