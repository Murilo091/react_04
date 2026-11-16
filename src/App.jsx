import styles from'./App.module.css'
import { Menu } from './component/Menu'

function App() {

  return (
    
     <div className={styles.wrapHome}>
      <Menu/>
     </div>
  )
}
export default App