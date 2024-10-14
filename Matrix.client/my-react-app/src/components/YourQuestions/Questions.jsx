import React, {useEffect, useState} from 'react'
import './YourQuestions.css'
import elem_blocks from './blocks_elemen.js' 

const Questions = () => {
  
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const phrases = [
        "Сколько стоит?",
        "Сделайте сайт как у конкурента?",
        "Продвижение сайта?"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
        }, 2000); 

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <div className='questions_block'>
            <div className="our_questions_block">
                <h1>Вы приходите с вопросами<br/></h1>
                <h2 className="animated_phrase">{phrases[currentPhrase]}</h2>
            </div>
            <div className="unswer">
                <h1>И получаете ответы...</h1>
            
                <div className="unswer_block">
                    {elem_blocks.map(block => (
                    <div key={block.id} className="block">
                        <p>{block.text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default Questions