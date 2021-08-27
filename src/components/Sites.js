import React , { useState} from "react";
import tradrLogo from "../images/TradrLogo.png"
import cranium from "../images/CraniumLandLogo.png";
import podemicLogo from "../images/PodemicLogo.png"
import './CSS/sites.css'

const Sites = () => {

    const [focused, setFocused] = useState()
    const [info, setInfo] = useState('Please explore any of my above projects!')
    const [name, setName] = useState('')

    const hover = (site) => {
        switch (site) {
            case 'cranium' :
                setInfo('Manages the creation and locating of decks of flash cards for users to study (clone inspiration: Brainscape)')
                setName('CraniumLand')
                setFocused('cranium')
                break;
            case 'tradr' :
                setInfo('Allows users to manage a collection of trading cards that will match users based off of their collections')
                setName('Tradr')
                setFocused('tradr')
                break;
            case 'podemic' :
                setInfo('Social platform pertaining to podcast reviews and user comments with ratings (clone inspiration: GoodReads)')
                setName('Podemic')
                setFocused('podemic')
                break;
            default :
                break;
            }

    }
    return (
        <div className='siteContent'>
            <h3>Projects</h3>
            <div className='siteHolder'>
                <a href='https://podemic.herokuapp.com/' target="_blank" rel="noreferrer" onMouseEnter={() => hover('podemic')}>
                    <img alt='Podemic' src={podemicLogo} className={(focused === 'podemic') ? `logo, focused`: 'logo'}/>
                </a>
                <a href='https://re-craniumland.herokuapp.com/' target="_blank" rel="noreferrer" onMouseEnter={() => hover('cranium' )}>
                    <img alt='Craniumland' src={cranium} className={(focused === 'cranium') ? `logo, focused`: 'logo'}/>
                </a>
                <a href='https://tradr-capstone.herokuapp.com/' target="_blank" rel="noreferrer" onMouseEnter={() => hover('tradr')}>
                    <img alt='Tradr' src={tradrLogo} className={(focused === 'tradr') ? `logo, focused`: 'logo'}/>
                </a>
            </div>
            <div className='siteDescription'>
                {name &&
                <h3>{name}</h3>
                }
                {info}
            </div>
        </div>
    )
}

export default Sites;
