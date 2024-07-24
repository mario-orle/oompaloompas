import DOMPurify from 'dompurify'
import './style.css'

const OompaLoompaDescription = ({ oompaLoompa }) => {
  return (
    <div className='description'>
      <h2 className='description__name'>{oompaLoompa.first_name} {oompaLoompa.last_name}</h2>
      <h3 className='description__profession'>{oompaLoompa.profession}</h3>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(oompaLoompa.description) }}></div>
    </div>
  )
}

export default OompaLoompaDescription
