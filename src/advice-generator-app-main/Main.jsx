import PatternDividerDesktop from './images/pattern-divider-desktop.svg';
import PatternDividerMobile from './images/pattern-divider-mobile.svg';
import Dice from './images/icon-dice.svg';
import { useEffect, useState } from 'react';

const Main = () => {

    const [advice, setAdvice] = useState({});
    const [clicked, setClicked] = useState(true);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
                const json = await res.json();
                setAdvice(json);
            } catch (err) {
                console.error('Error loading data: ', err);
            }
        }

        FetchData();
    }, [clicked]);

    const changeAdvice = () => {
        setClicked(clicked => !clicked);
    }

    return (
        <div className="container">
            {advice.slip ?
                (<>
                    <h5 className="adviceNumber">ADVICE #{advice.slip.id}</h5>
                    <p className="advice">
                        <q>{advice.slip.advice}</q>
                    </p>
                </>) :
                <p>Loading...</p>
            }

            <picture>
                <source media="(min-width: 768px)" srcSet={PatternDividerDesktop} />
                <img src={PatternDividerMobile} alt='Pattern Divider' />
            </picture>

            <button type="button" className='btn' onClick={changeAdvice}>
                <img src={Dice} alt="Dice" />
            </button>
        </div>
    )
}

export default Main