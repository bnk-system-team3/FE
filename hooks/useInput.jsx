import { useState } from "react";

//두번째 매개변수에도 넣어준다. 
export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //setInputValue를 다시 초기화 시키는 로직과함께 submitAction(inputValue)함수를 넣어준다. 

  return [inputValue, handleChange];
}