// const Controller=({onClkBtn})=>{
//     return <div>
//         <button onClick={()=>{onClkBtn(-1)}}>-1</button>
//         <button onClick={()=>{onClkBtn(-10)}}>-10</button>
//         <button onClick={()=>{onClkBtn(-100)}}>-100</button>
//         <button onClick={()=>{onClkBtn(+100)}}>+100</button>
//         <button onClick={()=>{onClkBtn(+10)}}>+10</button>
//         <button onClick={()=>{onClkBtn(+1)}}>+1</button>
//     </div>
// }
// export default Controller;

const Controller2 =({onClkBtn}) =>{
    const values = [-100,-10,-1,1,10,100];

    return (
        <div>
            {values.map((value)=>(
                <button key={value} onClick={()=>onClkBtn(value)}>
                    {value > 0 ? `+${value}`:value}
                </button>
            ))}
        </div>
    )
}
export default Controller2;