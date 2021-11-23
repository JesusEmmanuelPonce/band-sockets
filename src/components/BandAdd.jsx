import React from 'react'

const BandAdd = () => {
    return (
        <div>
            <h3>Agregar banda</h3>
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nuevo nombre de banda"
                />
            </form>
        </div>
    )
}

export default BandAdd
