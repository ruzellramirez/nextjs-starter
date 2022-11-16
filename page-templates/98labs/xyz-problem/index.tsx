import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";

interface XYZData {
  letters: string;
  size: number;
  direction: string;
}

const XYZProblem: NextPage = () => {
  const [state, setState] = useState<XYZData>({
    letters: "",
    size: 3 | 0,
    direction: "horizontal",
  });
  const [innerHTMLArray, setInnerHTMLArray] = useState<Array<object>>([]);
  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>
  ) => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;
    const letterValidator = /[X-Zx-z]$/;

    if (inputValue === "") {
      setState({ ...state, [inputName]: inputValue });
      return;
    }

    switch (inputName) {
      case "letters":
        (inputValue === "" || letterValidator.test(inputValue)) &&
          setState({ ...state, [inputName]: inputValue.toUpperCase() });
        break;
      case "size":
        if (inputValue !== "e")
          setState({ ...state, [inputName]: parseInt(inputValue) });
        break;
      case "direction":
        setState({ ...state, [inputName]: inputValue });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const minSize = 3;
    const maxSize = 15;
    const { size } = state;
    const isSizeValid = (size: number) => {
      let hasErrors = false;
      if (size < 3) {
        alert(`Size is less than minimum amount ${minSize}`);
        hasErrors = true;
      }
      if (size % 2 === 0) {
        alert("Size is an even number");
        hasErrors = true;
      }
      if (size > 25) {
        alert(`Size is larger than max amount ${maxSize}`);
        hasErrors = true;
      }
      return !hasErrors;
    };

    isSizeValid(size) && createPattern(state);
  };

  const createPattern = (patternData: XYZData) => {
    const { letters, size } = patternData;
    let innerChild = "";
    const patternArray = letters.split("");
    let currentArray: any = [];
    const containerArray: any = [];
    const n = size;
    patternArray.map((character) => {
      switch (character) {
        case "X":
          currentArray = [];
          for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
              if (i === j || i + j === n - 1) {
                innerChild += "o";
              } else {
                innerChild += "\u00A0";
              }
            }
            currentArray.push(<p>{innerChild}</p>);
            innerChild = "";
          }

          containerArray.push(<div>{currentArray}</div>);
          setInnerHTMLArray(containerArray);

          break;
        case "Y":
          currentArray = [];
          for (let i = 0; i < Math.ceil(n / 2); i++) {
            for (let j = 0; j < n; j++) {
              if (i === j || i + j === n - 1) {
                innerChild += "o";
              } else {
                innerChild += "\u00A0";
              }
            }
            currentArray.push(<p>{innerChild}</p>);
            innerChild = "";
          }
          for (let i = 0; i < Math.floor(n / 2); i++) {
            for (let j = 0; j < n; j++) {
              if (j === Math.floor(n / 2)) {
                innerChild += "o";
              } else {
                innerChild += "\u00A0";
              }
            }
            currentArray.push(<p>{innerChild}</p>);
            innerChild = "";
          }

          containerArray.push(<div>{currentArray}</div>);
          setInnerHTMLArray(containerArray);
          break;
        case "Z":
          currentArray = [];
          for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
              if (i === 0 || i === n - 1) {
                innerChild += "o";
              } else if (i + j === n - 1) {
                innerChild += "o";
              } else {
                innerChild += "\u00A0";
              }
            }
            currentArray.push(<p>{innerChild}</p>);
            innerChild = "";
          }

          containerArray.push(<div>{currentArray}</div>);
          setInnerHTMLArray(containerArray);
          break;
      }
    });
  };

  return (
    <section className="xyz__problem">
      <Head>
        <title>98 Labs Coding Exercises - XYZ Problem</title>
      </Head>
      <div className="row">
        <div className="col-lg-3 xyz__problem__form pb-3">
          <form onSubmit={handleSubmit}>
            <label className="form-label p-0 pb-2 fw-bold m-0">
              Enter a combination of X, Y, and Z
            </label>
            <input
              className="form-control"
              name="letters"
              type="text"
              onChange={handleChange}
              value={state.letters}
              required
            ></input>
            <label className="form-label p-0 pb-2 fw-bold m-0">
              Enter size (Odd number between 3 and 25)
            </label>
            <input
              className="form-control"
              name="size"
              type="number"
              onChange={handleChange}
              value={state.size}
              maxLength={2}
              required
            ></input>
            <label className="form-label p-0 pb-2 fw-bold m-0">
              Enter direction
            </label>
            <select
              className="form-select mb-3"
              name="direction"
              onChange={handleChange}
              value={state.direction}
              required
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
            <div className="text-end p-0 m-0">
              <button className="btn btn-success">Enter</button>
            </div>
          </form>
        </div>
        <div className="col-lg-9 xyz__problem__solution mt-4">
          <div className="row d-inline-flex align-content-start flex-wrap">
            {" "}
            {innerHTMLArray.map((elem: any) => {
              console.log(innerHTMLArray);
              return (
                <div
                  key={Math.random()}
                  className={
                    state.direction === "horizontal" ? "col" : "col-12 mb-3"
                  }
                >
                  <p>{elem}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-3 text-center">
          <Link href="/98labs">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default XYZProblem;
