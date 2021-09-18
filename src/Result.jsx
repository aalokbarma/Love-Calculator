import React, { useState } from 'react';
import './Result.css';

function Result() {


    var min = 1;
    var max = 100;
    var rand =  min + (Math.random() * (max-min));
    var perc = rand.toFixed(0)

    const[widths, setWidths] = useState(`${perc}`);
    return (
        <div className = "result">
            <div className = "result__container">
                <div className = "result__header">
                    <h1 className = "result__heading">Love Calculator</h1>
                </div>
                <div className = "result__name1Div"><h1 className = "result__name1">Your Love for Him/Her</h1></div>
                {/* <div className = "result__loveDiv"><h1 className = "result__love">Love</h1></div> */}
                {/* <div className = "result__name2Div"><h1 className = "result__name1">Lover</h1></div> */}
                <div class="container2">
                    <div class="skill">
                        <div class="percent">
                        <div className="progress" style={{ width: `${widths}%` }}></div>
                        </div>
                        
                        <div className = "login__lovePercent">{widths}%</div>
                    </div>
                </div>
                <p className = "result__para">Stay a happy love life.</p>
            </div>
        </div>
    )
}

export default Result;
