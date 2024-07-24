import './style.css'

const OompaLoompaImage = ({ imgUrl, name }) => {
  return (
    <picture className='image'>
      <img src={imgUrl} alt={`${name} picture`} />
    </picture>
  )
}

export default OompaLoompaImage
