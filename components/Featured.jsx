import styles from "../styles/Featured.module.css";



const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Contactanos <span>Pronto</span></h1>
      <div className={styles.contactForm}>
        <div className={styles.contactOrder}>
              <form action="conexion.php">
                  <p>
                      <label>Name</label>
                      <input type="text" name="fullname"/>
                  </p>
                  <p>
                      <label>Surname</label>
                      <input type="text" name="fullname"/>
                  </p>
                  <p>
                      <label>Adress</label>
                      <input type="text" name="fullname"/>
                  </p>
                  <p>
                      <label>City</label>
                      <input type="text" name="fullname"/>
                  </p>
                  <p>
                      <label>Zipcode</label>
                      <input type="text" name="fullname"/>
                  </p>
                  <p>
                      <label>Country</label>
                      <input type="text" name="fullname"/>
                  </p>
                  <p>
                      <label>Email</label>
                      <input type="email" name="email"/>
                  </p>
                  <p>
                      <label>Celphone</label>
                      <input type="tel" name="phone"/>
                  </p>
                  <p>
                      <label>Asunto</label>
                      <input type="text" name="affair"/>
                  </p>
                  
                  <p className="block">
                    <form action="#">
                      <button className={styles.button}>Enviar</button>
                    </form>
                  </p>
              </form>
          

          <div className={styles.contactInfo}>
              <h2>More Info</h2>
              <ul className={styles.ul}>
                  <li><i className="fas fa-map-marker-alt"></i> Av. Los Faisanes 1040, Surco</li>
                  <li><i className="fas fa-phone"></i> (051) 922 535 040</li>
                  <li><i className="fas fa-envelope-open-text"></i> rosamallquiperez@gmail.com</li>
              </ul>
              <p>Estamos disponibles para ayudarte</p>
              <p>Dinos como lo podemos hacer</p>
              <h2>Baby <span>Kuna</span></h2>
              <div className={styles.retorno}>
                <form action="#">              
                    <button className={styles.button}>Retornar</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
    

  );
  };
  export default Featured;


