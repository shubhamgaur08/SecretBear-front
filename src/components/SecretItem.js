import React  from 'react'

import "./SecretItem.css"

const SecretItem = (props) => {
    
    
    
    return (
        <div className="row-md-3 h">
            <div className="card my-2">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        
                        
                        
                    </div>
                    <h2 className="card-text">{props.data}</h2>

                </div>
            </div>
        </div>
    )
}

export default SecretItem
