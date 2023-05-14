import { useState, useMemo, useEffect } from "react";

export function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  // Write a function that takes as parameter a sentence as a string and returns a sentence as string with the letters reversed.
  //* Ex.:
  //* reverse("I ate some apples"); //I eta emos selppa
  // */
  function reverse(s: string) {
    //I ate some apples
    const sentenceArray = s.split(" ");
    console.log("sentenceArray", sentenceArray);
    //["I" "ate" "some" "apples"]
    let reversedArray = ["I"];
    for (let i = 1; i < sentenceArray.length; i++) {
      const w = sentenceArray[i].split("");
      const reversedW = w.reverse();
      console.log("reversedW", reversedW);
      console.log("joinedreversedW", reversedW.join(""));
      reversedArray.push(reversedW.join(""));
    }
    console.log("1111reversedArray", reversedArray);

    return reversedArray.join(" ");
  }

  console.log("expensiveValue", reverse("I eta emos selppa"));

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>

      {/* Use the memoized value in the component */}
    </div>
  );
}
