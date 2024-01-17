import React  from 'react'

import "./SecretItem.css"

const SecretItem = (props) => {
    
    
    
    return (
        <div className="row-md-3">
            <div className="cardi my-2 ">
                <div className="card-body">
                    
                    <h2 className="card-text text-center">{props.data}</h2>

                </div>
            </div>
        </div>
    )
}

export default SecretItem
