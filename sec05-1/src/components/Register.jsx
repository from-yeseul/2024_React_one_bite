import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:""
    });

    const countRef = useRef(0);
    const inputRef = useRef(0);

    const onChange = (e) => {
        countRef.current++;

        setInput({
            ...input,   //기존 값 나열
            [e.target.name] : e.target.value,   //[]는 e.target의 property key로 설정
        })
    }

    const onSubmit = () => {
        if(input.name === ""){
            inputRef.current.focus();
        }
    }
    
    return(
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}  
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}  
                    type="date"
                />
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea 
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;