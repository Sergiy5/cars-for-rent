import { useState, useEffect } from "react";
import axios from "axios";
import ListAdverts from 'components/listAdverts/ListAdverts';
import styles from '../catalog/Catalog.module.css';
import { Modal } from "components/modal/Modal";
import { CarDetail } from "components/carDetail/CarDetail";

axios.defaults.baseURL = "https://648844880e2469c038fd5f51.mockapi.io/cars-for-rent";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [carDetail, setCarDetail] = useState(null)
  const itemsPerPage = 8;

   const closeModal = () => {
     setShowModal(false);
   };
   const openModal = () => {
    
     setShowModal(true);
   };

   useEffect( () => {
     try {
       axios.get('/adverts').then(res => {
       console.log(res)
        setAdverts(res.data);
      });
      
     } catch (error) {
       console.log(error)
    }
      
  }, []);
  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const carsOnPage = currentPage === 0
    ? adverts.slice(startIndex, endIndex)
    : adverts.slice(0, endIndex);
      
 

  const handlePageChange = () => {
    let counter = 0;
    counter += 1;
    setCurrentPage(currentPage + counter);
  };

  const handleCar = (id) => {
    openModal();
   findCarById(id); 
  }
  
  const findCarById = (id) =>{
    const car = adverts.find(advert => advert.id === id);
   setCarDetail(car)
  }

  return (
    <>
      <div className={styles.wrapperCatalog}>
        <ListAdverts handleCar={handleCar} cars={carsOnPage} />
      </div>
      <button className={styles.btnLoadMore} onClick={handlePageChange}>
        Load more
      </button>
      {showModal && (
        <Modal
          children={<CarDetail car={carDetail} />}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Catalog;