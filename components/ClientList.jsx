import styles from "../styles/ClientList.module.css";
import ClientCard from "./ClientCard";
const ClientList = () => {
    return (
        <div className={styles.container}>
            <h1 className="styles.title">Datos de los Clientes</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eligendi unde dolorum possimus dolor soluta porro iure sint autem facere dicta quidem exercitationem dolorem numquam aliquam cumque aliquid reprehenderit rem.
            </p>
            <div className="wrapper">
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
            </div>
        </div>
    )
}

export default ClientList