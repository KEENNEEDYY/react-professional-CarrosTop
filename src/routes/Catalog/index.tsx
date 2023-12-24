import './styles.css';
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";

export default function Catalog(){
    return(
        <>
            <Header />
            <main className="ctop-catalog-main">
                <section id="ctop-catalog-section" className="ctop-container">
                    <div className="ctop-search-bar-container">
                        <Searchbar />
                    </div>
                    <div className='ctop-catalog-cards-container'>
                        <div>Teste</div>
                    </div>
                </section>
            </main>
        </>
    )
}