import './styles.css';
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import CatalogCard from '../../components/CatalogCard';

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
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>
                </section>
            </main>
        </>
    )
}