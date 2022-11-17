import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"></img>
                <h1>DSMeta</h1>
                <p>
                    Aula HTML/CSS
                    <a href="https://instagram.com/devsuperior.ig"> DevSuperior</a>
                </p>
            </div>
        </header>
    )
  }
  
  export default Header