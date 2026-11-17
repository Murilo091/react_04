import s from './Menu.module.css'
import { Link } from 'react-router'

export const Menu = () => {
    return(
    
              <nav className={styles.wrapHome}>
                <Link to="">Home</Link>
                <Link to="">Grafico</Link>
                <Link to="">Produtos</Link>
                <Link to="">Contato</Link>
              </nav>
        
    )
}