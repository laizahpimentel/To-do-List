
const filter = ({filter, setFilter, setSort }) => {
    return (
        <div className="filter"> 
        <h2>Filtrar: </h2>
        <div className="filter-options"></div>
            <div>
                <p>status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="completed">Completas</option>
                    <option value="incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort ("Desc")}>Desc</button>
            </div>
        </div>
    )
}

export default filter;
