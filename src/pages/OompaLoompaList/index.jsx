import { useState, useEffect, useRef } from 'react'
import { persistance } from '../../services/persistance'
import { refreshData } from '../../services/refreshData'
import { getOompaLoompas, getNextPage } from '../../api/oompaLoompas'
import OompaLoompaCard from '../../components/OompaLoompaCard'
import './style.css'

const OompaLoompaList = () => {
  const [oompaLoompas, setOompaLoompas] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [completed, setCompleted] = useState(false)
  const observerTarget = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          getNextPage().then(data => {
            if (data.current === data.total) {
              setCompleted(true)
              return;
            }
            persistance.persist('lastPage', data.current);
            persistance.persist('oompaLoompas', [...persistance.get('oompaLoompas'), ...data.results])
            setOompaLoompas((prevOompaLoompas) => [...prevOompaLoompas, ...data.results])
        });
        }
      },
      { threshold: 1 }
    );
  
    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }
  
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    };
  }, [observerTarget])


  useEffect(() => {
    if (persistance.isEmpty('oompaLoompas') || refreshData()) {
      getOompaLoompas().then(data => {
        console.log(data);
        persistance.persist('oompaLoompas', data.results)
        setOompaLoompas(data.results)
      })
      return
    }
    setOompaLoompas(persistance.get('oompaLoompas'))
  }, [])

  const filterBySearchValue = oompaLoompas => {
    return oompaLoompas?.filter(
      oompaLoompa =>
        oompaLoompa.first_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        oompaLoompa.last_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        oompaLoompa.profession?.toLowerCase().includes(searchValue.toLowerCase())
    )
  }

  return (
    <div className='oompaloompa-list'>
      <div className='oompaloompa-list__search'>
        <input
          className='oompaloompa-list__input'
          type='text'
          onChange={event => setSearchValue(event.target.value)}
          placeholder='Search'
        />
      </div>
      <div className='oompaloompa-list__title'>
        <h2>Find your Oompa Loompa</h2>
        <h3>There are more than 100k</h3>
      </div>
      <ul className='oompaloompa-list__grid'>
        {filterBySearchValue(oompaLoompas)?.map((oompaLoompa, index) => (
          <OompaLoompaCard oompaLoompa={oompaLoompa} key={index} />
        ))}
        {!completed && (
          <li ref={observerTarget}>Loading...</li>
        )}
      </ul>
    </div>
  )
}

export default OompaLoompaList
