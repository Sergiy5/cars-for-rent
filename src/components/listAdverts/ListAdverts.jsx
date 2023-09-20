import { nanoid } from 'nanoid';
import styles from './ListAdverts.module.css';


const ListAdverts = ({ cars, handleCar }) => {


    return cars.map(
    ({
      make,
      model,
      address,
      rentalCompany,
      rentalPrice,
      type,
      id,
      year,
      img,
      functionalities,
    }) => (
      <div className={styles.wrapperCard} key={nanoid()}>
        <div className={styles.icon}></div>
        <img className={styles.imageCard} src={img} alt={`${make}${model}`} />
        <div className={styles.wraperTitle}>
          <h2 className={styles.title}>
            {make} <span className={styles.modelName}>{model} </span>
            {year}
          </h2>
          <p>{rentalPrice}</p>
        </div>
        <ul className={styles.list}>
          <li key={nanoid()} className={styles.item}>
            {address.split(' ').slice(3, 4)}
          </li>
          <li key={nanoid()} className={styles.item}>
            {address.split(' ').slice(4)}
          </li>
          <li key={nanoid()} className={styles.item}>
            {rentalCompany}
          </li>
          <li key={nanoid()} className={styles.item}>
            {type}
          </li>
          <li key={nanoid()} className={styles.item}>
            {model}
          </li>
          <li key={nanoid()} className={styles.item}>
            {id}
          </li>
          <li key={nanoid()} className={styles.item}>
            {rentalPrice.split('').slice(1).join('') < 100
              ? 'Economy car rentals'
              : 'Premium'}
          </li>
          <li key={nanoid()} className={styles.item}>
            {functionalities[0]}
          </li>
        </ul>
        <button className={styles.button} onClick={()=>handleCar(id)}>
          Lern more
        </button>
      </div>
    )
  );
};
export default ListAdverts;
