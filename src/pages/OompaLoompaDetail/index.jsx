import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOompaLoompaById } from '../../api/oompaLoompaById'
import OompaLoompaDescription from '../../components/OompaLoompaDescription'
import OompaLoompaImage from '../../components/OompaLoompaImage'
import './style.css'

const OompaLoompaDetail = () => {
  const [oompaLoompa, setOompaLoompa] = useState({})
  const { oompaLoompaId } = useParams()

  useEffect(() => {
    getOompaLoompaById(oompaLoompaId).then(data => setOompaLoompa(data))
  }, [])
  return (
    <section className='details'>
      <OompaLoompaImage imgUrl={oompaLoompa.image} name={`${oompaLoompa.first_name} ${oompaLoompa.last_name}`} />
      <div className='details__group'>
        <OompaLoompaDescription oompaLoompa={oompaLoompa} />
      </div>
    </section>
  )
}

export default OompaLoompaDetail
