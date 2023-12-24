import './styles.css';
import carImg from '../../assets/car.png';
import Button from '../Button';

export default function CatalogCard(){
    return(
        <div className="ctop-catalog-card">
            <img src={carImg} alt="Car" />
            <h3>Audi Super TT</h3>
            <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, qui.</i></p>
            <Button />
        </div>
    )
}