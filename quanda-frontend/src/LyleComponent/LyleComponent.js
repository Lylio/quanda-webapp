import React from 'react';
import './lylecss.css';


function LyleComponent() {
    const x = 3;
    const y = 9;
    const total = x + y;
    return(
        <div className="container">
            <div className="lylestyle">
                {x} + {y} = {total}
            </div>
        </div>
    );
}

export default LyleComponent;