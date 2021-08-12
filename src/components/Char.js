import React,{useState, useEffect} from "react";
import './CSS/char.css'

const Char = () =>{
    const [wis, setWis] = useState(0)
    const [str, setStr] = useState(0)
    const [con, setCon] = useState(0)
    const [int, setInt] = useState(0)
    const [dex, setDex] = useState(0)
    const [cha, setCha] = useState(0)
    const [hideChar, setHideChar] = useState(true)

    const onRoll = (e) => {
        e.preventDefault()
        setHideChar(false)
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
        <div className='charSheet'>
            {console.log(hideChar)}
            {!hideChar &&
                        <div className='stats'>
                        <div className='brain'>
                            <p className='stat'>Wisdom : {wis}</p>
                            <p className='stat'>Intelligence : {int}</p>
                            <p className='stat'>Charisma : {cha}</p>
                        </div>
                        <div className='brawn'>
                            <p className='stat'>Strength : {str}</p>
                            <p className='stat'>Constitution : {con}</p>
                            <p className='stat'>Dexterity : {dex}</p>
                        </div>
                    </div>}
            <button onClick={onRoll}>Roll up!</button>
        </div>
    )
}

export default Char;
