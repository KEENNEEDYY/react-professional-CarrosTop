import './styles.css';

export default function Searchbar(){
    return(
        <>
            <form className="ctop-search-bar">
                <input className="ctop-form-control" type="text" placeholder="Digite sua busca" />
                <button className="ctop-search-bar-submit" type="submit">Buscar</button>
            </form>
        </>
    )
}