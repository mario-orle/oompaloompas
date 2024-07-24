import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='header__title'>
          <img className='header__image' src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" />
          Oompa Loompa Crew
        </h1>
      </Link>
    </header>
  )
}

export default Header
