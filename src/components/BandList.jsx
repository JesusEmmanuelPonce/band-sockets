import React, { useEffect, useState } from 'react'

const BandList = ({ data }) => {

    const [bands, setBands] = useState(data);

    useEffect(() => {
        
        setBands(data);
    }, [data]);

    const createRow = () => {

        const handleChangeName = ({target: { value }}, id) => {
            setBands(bands => bands.map(band => {
                if(band.id === id) {
                    band.name = value
                }

                return band;
            }))
        }

        const onBlurName = (id, name) => {
            console.log(id, name);
        }

        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button className="btn btn-primary">+1</button>
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            value={band.name}
                            onChange={e => handleChangeName(e, band.id)}
                            onBlur={() => onBlurName(band.id, band.name)}
                        />
                    </td>
                    <td>
                        <h3>{ band.votes }</h3>
                    </td>
                    <td>
                        <button className="btn btn-danger">Borrar</button>
                    </td>
                </tr>
            ))
        )
    }


    return (
        <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    { createRow() }
                </tbody>
            </table>
        </div>
    )
}

export default BandList
