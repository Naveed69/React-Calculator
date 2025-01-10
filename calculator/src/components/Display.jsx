import { useState } from "react";
import "./css/Display.css";
const Display = () => {
  const [inputData, setinputData] = useState("");
  const [result, setResult] = useState(null);
  const addInput = (e) => {
    setinputData(inputData + e.target.value);
  };
  const handle = () => {
    console.log("sum is calculated", inputData);
    // setResult(9);
    let arr = inputData.split("");
    console.log(arr);
    let arr1 = [];
    let i = 0,
      j = 0,
      val = 0;

    while (i <= arr.length) {
      if (
        Number(arr[i]) <= 9 &&
        Number(arr[i]) >= 0 &&
        arr[j] != "+" &&
        arr[j] != "-" &&
        arr[j] != "*" &&
        arr[j] != "/" &&
        j != arr.length
      ) {
        j++;
      } else if (
        i != j &&
        arr[i] != "+" &&
        arr[i] != "-" &&
        arr[i] != "*" &&
        arr[i] != "/" &&
        i != arr.length
      ) {
        val = val * 10 + Number(arr[i]);
        i++;
      } else {
        arr1.push(val);
        if (arr[j] != null) arr1.push(arr[j]);
        val = 0;
        j++;
        i = j;
      }
    }
    console.log(arr1);
    arr = [];
    i = 0;
    j = 0;
    let sen = false;
    //arr1=[1,+,23,-,2,*,8,-,2]
    while (i < arr1.length) {
      if (typeof arr1[j] == Number) {
        j++;
      } else if (arr1[j] != "+" && arr1[j] != "-") {
        if (arr1[j] == "*") arr.push(arr1[i] * arr1[j + 1]);
        j += 2;  
        i = j;
      }
    }
  };
  const clearAll = () => {
    setinputData("");
    setResult(null);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="cointainer">
        <div className="top">
          <h1>React Calculator</h1>
          <input type="text" className="display" defaultValue={inputData} />
          <p className="results">{result}</p>
        </div>
        <div className="buttons">
          <button type="button" value={"7"} onClick={(e) => addInput(e)}>
            7
          </button>
          <button type="button" value={"8"} onClick={(e) => addInput(e)}>
            8
          </button>
          <button type="button" value={"9"} onClick={(e) => addInput(e)}>
            9
          </button>
          <button type="button" value={"+"} onClick={(e) => addInput(e)}>
            +
          </button>
          <button type="button" value={"4"} onClick={(e) => addInput(e)}>
            4
          </button>
          <button type="button" value={"5"} onClick={(e) => addInput(e)}>
            5
          </button>
          <button type="button" value={"6"} onClick={(e) => addInput(e)}>
            6
          </button>
          <button type="button" value={"-"} onClick={(e) => addInput(e)}>
            -
          </button>
          <button type="button" value={"1"} onClick={(e) => addInput(e)}>
            1
          </button>
          <button type="button" value={"2"} onClick={(e) => addInput(e)}>
            2
          </button>
          <button type="button" value={"3"} onClick={(e) => addInput(e)}>
            3
          </button>
          <button type="button" value={"*"} onClick={(e) => addInput(e)}>
            *
          </button>
          <button type="button" value={"c"} onClick={clearAll}>
            C
          </button>
          <button type="button" value={"0"} onClick={(e) => addInput(e)}>
            0
          </button>
          <button type="button" onClick={handle}>
            =
          </button>
          <button type="button" value={"/"} onClick={(e) => addInput(e)}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
