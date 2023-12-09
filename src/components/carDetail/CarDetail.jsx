import { nanoid } from "nanoid";
import styles from '../carDetail/CarDetails.module.css';

export const CarDetail = ({ car }) => {
       const {make,
      model,
      address,
      rentalCompany,
      rentalPrice,
      type,
      id,
      year,
      img,
      functionalities} = car
    return (
      <div className={styles.wrapperCard} key={nanoid()}>
        <img className={styles.imageCard} src={img} alt={`${make}${model}`} />
        <div className={styles.wrapperTitle}>
          <h2 className={styles.title}>
            {make} <span className={styles.modelName}>{model} </span>
            {year}
          </h2>
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
        <button
          onClick={() => window.open('tel:+380730000000')}
          className={styles.button}
        >
          Rental car
        </button>
        {/*  */}
      </div>
    );
}