import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Detail from "./Detail";
import "./List.css";

function List() {

  const [elements, setElements] = useState([]);
  const [id, setElement] = useState(undefined);

  const handleCafe = (cafe) => {
    if (id === cafe) {
      setElement(undefined);
    } else {
      setElement(cafe);
    }
  }

  const showDetail = () => {
    if (id !== undefined) {
      return <Detail id={id} />;
    }
  }

  const getCafes = async function () {
    return fetch("http://localhost:3001/cafes")
    .then((response) => response.json())
    .then((data) => data);
}

  useEffect(() => async function () {
    const cafeData = await getCafes();
    setElements(cafeData)
  }, []);

  return (
    <div>
      <div class="row">
        <div class="col-8">
          <table className="table ByMe-Margin">
            <thead>
              <tr className="ByMe-TableHeader">
                <th scope="col">#</th>
                <th scope="col"><FormattedMessage id="nombre"/></th>
                <th scope="col"><FormattedMessage id="tipo"/></th>
                <th scope="col"><FormattedMessage id="region"/></th>
              </tr>
            </thead>
            <tbody>
              {elements.map((cafe) => (
                <tr key={cafe.id}>
                  <th scope="row" onClick={() => handleCafe(cafe.id)}>{cafe.id}</th>
                  <td>{cafe.nombre}</td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="col-4">
        {showDetail()}
        </div>
      </div>
    </div>
  );
}

export default List;