const arr1 = [1, 3, 5, 3, 8, 1, 12];
const arr2 = [3, 4, 5, 9, 15, 18];

function foo (data1, data2) {

}

foo(arr1, arr2) // [1, 3, 5, 8, 12, 4, 9, 15,18]

const foo => (data1, data2) {
    let exist = {};
    return data1.concat(data2).filter(x => !exist[x] ? exist[x] = true : false);
}



// function foo (data1, data2) {
// 	let arr = [...data1, ...data2];
//   console.log(arr);
//   let result = arr.filter( (el, pos) => arr.indexOf(el) === pos);
//   console.log(result);
//   return arr.filter( (el, pos) => arr.indexOf(el) === pos)
// }



import React, { useState } from "react";
import "./styles.css";

const init = () => {
    const inputs = [];
    for (let i = 0; i < 104; i++) {
        inputs.push({ id: i, value: "", formula: "" });
    }
    return inputs;
};

export default function App() {
    let error = document.createElement("div");
    error.className = "alert";
    error.innerHTML = "Something went wrong";

    const [inputs, setInputs] = useState(init());

    const handleClick = (e) => {
        const cell = inputs.find(({ id }) => id === Number(e.target.id));

        if (cell && cell.formula) {
            try {
                console.log(cell.formula);
                e.target.value = cell.formula;

                // setInputs(
                //   inputs.map((i) => {
                //     return i.id === Number(e.target.id)
                //       ? { ...i, value: cell.formul }
                //       : i;
                //   })
                // );
            } catch (e) {
                document.body.append(error);
            }
        }
    };

    const handler = (e) => {
        if (e.target.value.startsWith("=") && e.key === "Enter") {
            let v = e.target.value.slice(1);

            if (v.startsWith("sum")) {
                v = v.slice(4, v.length - 1);
                let c = v.split(",");
                let s = 0;
                for (let i in c) {
                    s += parseInt(document.getElementById(c[i]).value);
                }

                v = "" + s;
            }

            if (v.startsWith("avg")) {
                v = v.slice(4, v.length - 1);
                let c = v.split(",");

                let s = 0;
                let n = 0;
                for (let i in c) {
                    n += 1;
                    s += parseInt(document.getElementById(c[i]).value);
                }

                v = "" + s / n;
            }

            try {
                setInputs(
                    inputs.map((i) => {
                        return i.id === Number(e.target.id)
                            ? { ...i, formula: e.target.value }
                            : i;
                    })
                );
                e.target.value = eval(v);
            } catch (e) {
                document.body.append(error);
            }
        }
    };

    // let inputs = [];

    // for (let i = 0; i < 104; i++) {
    //   inputs.push(
    //     <div key={i} className={"cell"}>
    //       <input id={i} onKeyDown={handler} />
    //     </div>
    //   );
    // }

    // return <div className={"table"}>{inputs}</div>;

    console.log(inputs);
    return (
        <div className={"table"}>
        <span>=sum(0,1)</span>
        <br />
        {inputs.map(({ id, value }) => {
                return (
                    <div key={id} className={"cell"}>
                    <input id={id} onKeyDown={handler} onClick={handleClick} />
                </div>
            );
            })}
        </div>
);
}

// ReactDOM.render(<App />, document.querySelector("#app"))
