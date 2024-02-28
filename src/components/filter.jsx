

const filter = () => {
    return (
        <div className="filter"> 
        <h2>Filtrar: </h2>
        <div className="filter-options"></div>
            <div>
                <p>status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    )
}

export default filter;
