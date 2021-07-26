import { useState, useEffect } from 'react';

const jsonData = [{
    key: "1",
    name: "Fernando"
}, {
    key: "2",
    name: "Pablo"
}, {
    key: "3",
    name: "María"
}, {
    key: "4",
    name: "Josué"
}
]


function Listas() {

    const [isLoading, setIsLoading] = useState(true);

    /** componentDidMount */
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, [])

    const renderData = () => {
        return jsonData?.map((value) => (
            //key es el identificador de React que distingue a un "elemento"
            <div key={value.key}>
                <p>{value.name}</p>
            </div>
        ))
    }



    return (
        <div className="Listas">
            {isLoading ? <h2>cargando...</h2> : renderData()}
        </div>
    );
}

export default Listas;
