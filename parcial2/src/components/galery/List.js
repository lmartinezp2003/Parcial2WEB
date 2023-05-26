import { useEffect, useState } from "react";
import Card from "./Card";
import "./List.css";

function mapCardElements(List) {
  return List.map(() => <Card info={} />)
}

function List() {

  const [cardElements, setCardElements] = useState([]);
  const [showContent, setShowContent] = useState(true);

  const getCafes = async function () {
    return fetch("http://localhost:3001/cafes")
    .then((response) => response.json())
    .then((data) => data);
}

const toggleContent = () => {
    setShowContent(!showContent);
  };

  useEffect(() => async function () {
    const Data = await getCafes();
    const asyncRes = await Promise.all(Data.map(async () => {
        return { }
    }));
    setCardElements(mapCardElements(asyncRes))
  }, []);

  return (
    <div class="row">
        <div>
            <div onClick={toggleContent} class="col-8" className="gallery">{cardElements}</div>
            {showContent && <div class="col-4">col-4</div>}
        </div>
    </div>
  );
}

export default List;