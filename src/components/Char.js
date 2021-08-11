import React,{useState, useEffect} from "react";


const Char = () =>{
    const [wis, setWis] = useState(0)
    const [str, setStr] = useState(0)
    const [con, setCon] = useState(0)
    const [int, setInt] = useState(0)
    const [dex, setDex] = useState(0)
    const [cha, setCha] = useState(0)

    const onRoll = (e) => {
        e.preventDefault()
        let roll = () => {
            return Math.floor(Math.random() * (1 + 5) + 1)
        }
        let getStat = () => {
            let stat = [roll(), roll(), roll(), roll()]
            const min = Math.min(...stat)
            let dropped = []
            let didDrop = false;
            for(let i=0; i < stat.length; i++){
                if(stat[i] === min && !didDrop){
                    didDrop = true;
                } else {
                    dropped.push(stat[i])
                }
            }
            console.log(dropped)
            return dropped.reduce((a,b) => a + b, 0)
        }
        setWis(getStat())
        setStr(getStat())
        setCon(getStat())
        setInt(getStat())
        setDex(getStat())
        setCha(getStat())
    }
    return(
        <div>
            <div>
                <div>
                    <p>Wisdom : {wis}</p>
                    <p>Strength : {str}</p>
                    <p>Constitution : {con}</p>
                </div>
                <div>
                    <p>Intelligence : {int}</p>
                    <p>Dexterity : {dex}</p>
                    <p>Charisma : {cha}</p>
                </div>
            </div>
            <button onClick={onRoll}>Roll up!</button>
        </div>
    )
}

export default Char;
