import { useEffect, useState } from "react";
import './Detail.css';
import { FormattedDate, FormattedMessage } from "react-intl";

function Detail(props) {

    const [element, setElement] = useState([]);
    let id = props.id

    const getCafe = async function (id) {
        console.log(id)
        return fetch("http://localhost:3001/cafes/" + id)
        .then((response) => response.json())
        .then((data) => data);
    }

    useEffect(() => async function () {
        const cafeDetail = await getCafe(id);
        setElement(cafeDetail)
      });

    return (

        <div className="ByMe-CafeContainer">
            <div className="ByMe-CafeCard">
                <h1 className="ByMe-H1">{element.nombre}</h1>
                <p className="ByMe-p">
                    <FormattedDate
                        value={new Date(element.fecha_cultivo)}
                        year="numeric"
                        month="long"
                        day="numeric"
                        hour="numeric"
                    />
                </p>
                <img className="ByMe-CafeImg" src={element.imagen} alt={element.nombre} />
                <p className="ByMe-p"><FormattedMessage id="notas" /></p>
                <p className="ByMe-p">{element.notas}</p>
                <h1 className="ByMe-H1"><FormattedMessage id="cultivadoA" />{element.altura}<FormattedMessage id="msnm" /></h1>
            </div>
        </div>
    )
}

export default Detail;