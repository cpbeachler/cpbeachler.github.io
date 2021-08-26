import React,{useState, useEffect} from "react";
import './CSS/char.css'

const Char = () =>{
    const [wis, setWis] = useState(0)
    const [str, setStr] = useState(0)
    const [con, setCon] = useState(0)
    const [int, setInt] = useState(0)
    const [dex, setDex] = useState(0)
    const [cha, setCha] = useState(0)
    const [suggest, setSuggest] = useState()
    const [hideChar, setHideChar] = useState(true)

    const wisDescription = 'Your highest stat is Wisdom! You would make a great Cleric or Druid. Will you follow the Light or the Wild?'
    const strDescription = 'Your highest stat is Strength! You would make a great Fighter or Paladin. Will you fight for sport or duty?'
    const conDescription = 'Your highest stat is Constitution! You would make a great Barbarian, but every class needs a decent health pool!'
    const intDescription = `Your highest stat is Intelligence! Thats the perfect stat for a wizard! Don't forget to prepare fireball!`
    const dexDescription = 'Your highest stat is Dexterity! You should play a Monk or a Rogue. Will you steal from the rich, or give to the poor?'
    const chaDescription = 'Your highest stat is Charisma! You would be a perfect Sorcerer or Warlock. Was your power given to you, or is it from your bloodline?'
    const descriptions = [wisDescription, strDescription, conDescription, intDescription, dexDescription, chaDescription]

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

    useEffect(()=>{

        const consider = () => {
            let fullStats = [wis, str, con, int, dex, cha]
            let max = Math.max(...fullStats)
            let desc = []
            if(max > 0){
                fullStats.forEach((stat, i) => {
                    if(stat === max){
                        desc.push(descriptions[i])
                    }
                })
            }
            setSuggest(desc)
        }
        consider()
    },[cha])





    return(
        <div className='charSheet'>
            {console.log(suggest)}
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
            {!hideChar &&
                        <div className='suggestion'>
                            {suggest.map((suggestion)=> {
                                return <p>{suggestion}</p>
                            })}
                        </div>}
            <button onClick={onRoll}>Roll up!</button>
        </div>
    )
}

export default Char;
