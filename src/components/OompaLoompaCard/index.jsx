import { Link } from 'react-router-dom'
import './style.css'

const OompaLoompaCard = ({ oompaLoompa }) => {
  return (
    <li key={oompaLoompa.id} className='card'>
      <Link to={`/${oompaLoompa.id}`} className='card__link'>
        <picture className='card__picture'>
          <img
            className='card__image'
            src={oompaLoompa.image}
            alt={`${oompaLoompa.model} image`}
            loading='lazy'
          />
        </picture>
        <section className='card__details'>
          <h2 className='card__details-name'>{oompaLoompa.first_name} {oompaLoompa.last_name}</h2>
          <p className='card__details-gender'>
          {oompaLoompa.gender === 'F'
            ? (
              'Female'
              )
            : (
              'Male'
              )}
            </p>
            <p className='card__details-job'>{oompaLoompa.profession}</p>

        </section>
      </Link>
    </li>
  )
}

export default OompaLoompaCard
