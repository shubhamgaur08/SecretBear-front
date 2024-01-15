import React  from 'react'

import "./SecretItem.css"

const SecretItem = (props) => {
    
    
    
    return (
        <div className="col-md-3">
            <div className="card my-3">
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
