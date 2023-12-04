export const ListSlider = ({ arr }) => {
    
    return (
        arr.map(({ carLogo, logo }) => {
          return <div><h3>{carLogo}</h3></div>;
        })
      
    );
}