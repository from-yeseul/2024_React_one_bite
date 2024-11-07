import { useState } from "react";

function useInput(){
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    };
    return [input, onChange];
}

const HookExam = () => {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    const state = useState();
    
    //if(){}
    //for(){}
    
    return(
      <div>HookExam</div>
    );
};

export default HookExam;