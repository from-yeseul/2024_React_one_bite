import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");   //초기값 설정

    const onChangeName = (e) => {
        console.log(e);
        setName(e.target.value);
    }
    
    return(
      <div>
        <input
            value={name}
            onChange={onChangeName} 
            placeholder={"이름"}
        />
      </div>
    );
};

export default Register;