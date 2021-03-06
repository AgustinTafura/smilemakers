import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {capitalizeFirstLetter, capitalizeAllFirstletters} from '../../utils/index'
import { data } from './data.jsx'
import './index.scss'

export const FindUs = () => {

    const [windowWidth, setWindowWidth] = useState()

    const [professionals, setProfessionals] = useState([]);
    const [citySelected, setCitySelected] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');

    const [cities, setCities] = useState({});
    const [neighbourhoods, setNeighbourhoods] = useState([]);

    
    const addPlaces = ()=>{
        var citiesList = {}
        var allNeighbourhoods = []
        data.forEach(el=>{
            if(!citiesList.hasOwnProperty(el.city)) {
                citiesList[el.city] = []
            }
            !citiesList[el.city].includes(el.neighbourhood) && citiesList[el.city].push(el.neighbourhood)
        })
        setCities(citiesList)

        Object.entries(citiesList).forEach((arr,key)=>{
            
            arr[1].map(el=>{
                return allNeighbourhoods.push(el)
            })
        })
        setNeighbourhoods(allNeighbourhoods) 
    }
    
    const filterByCity = (el)=>{
        const citySelected = el.target.value
        setCitySelected(citySelected)
        if( !citySelected ){
            document.getElementById("neighbourhood").disabled = true;
            setNeighbourhood('')
            setProfessionals(data)
        } else {
            document.getElementById("neighbourhood").disabled = false;
            const filteredProfessionals = data.filter(el=>el.city === citySelected)
            setNeighbourhoods(cities[citySelected]);
            setProfessionals(filteredProfessionals)
        }  
    }

    const filterByNeighbourhood = (el)=>{
        const neighbourhoodSelected = el.target.value
        setNeighbourhood(neighbourhoodSelected)
        if( !neighbourhoodSelected ){
            const filteredProfessionals = data.filter(el=>el.city === citySelected)
            setProfessionals(filteredProfessionals)
        } else {
            const filteredProfessionals = data.filter(el=>el.neighbourhood === neighbourhoodSelected)
            setProfessionals(filteredProfessionals)
            setNeighbourhood(neighbourhoodSelected)
        }  
    }
    
    useEffect(() => {
        addPlaces()
        setProfessionals(data)
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize',()=>setWindowWidth(window.innerWidth)
        )
    }, [])
    return (
        <>
            <div className="site-section" id='encontranos'>
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="site-heading text-black">Donde <strong>Encontrarnos</strong></h2>
                        </div>
                    </div>
                    <div className='row justify-content-between '>
                        <div className='col-lg-3 align-self-center'>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Distrito</label>
                                <select className='form-select' name="city" value={citySelected} onChange={filterByCity} >
                                    <option value=''>TODOS</option>
                                    {   Object.keys(cities).map(el=><option key={Math.random()} value={el}>{el.toUpperCase()}</option>) }
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="neighbourhood" className="form-label">Ciudad/Barrio</label>
                                <select disabled className='form-select' name="neighbourhood" id="neighbourhood" value={neighbourhood} onChange={filterByNeighbourhood}>
                                    <option value=''>TODOS</option>
                                    {   neighbourhoods.map(el=><option value={el} key={Math.random()}>{el.toUpperCase()}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-8 overflow-auto table-container" style={{height: '60vh'}}>
                            <table className="table align-middle ">
                                <thead>
                                </thead>
                                <tbody >
                                    {
                                        professionals.map(professional=>{return(
                                            <tr key={Math.random()} style={{borderBottom: '4px solid #f8f9fd'}}>
                                                <th><img src={`${process.env.PUBLIC_URL}/images/${professional.img}`} alt="" width={windowWidth > 576 ? '90px' : '60px'} style={{borderRadius:'50%'}} /></th>

                                                {
                                                    windowWidth >= 576 ?
                                                        <>
                                                            <td className='text-black-opacity-5 fs-6'>{capitalizeFirstLetter(professional.neighbourhood)}</td>
                                                            <td>
                                                            <div className='text-black-opacity-5 fs-6'>{capitalizeAllFirstletters(professional.od)}</div>   
                                                                <div className='fs-6'>{capitalizeFirstLetter(professional.address)}</div>
                                                            </td>
                                                        </>
                                                    
                                                    :
                                                        <>
                                                            <td>
                                                            <div className='fw-bold'>{capitalizeFirstLetter(professional.business ?? 'Consultorio')}</div>
                                                            <div className='text-black-opacity-5 fs-6'>{capitalizeAllFirstletters(professional.od)}</div>   
                                                                <div className='fs-6'>{capitalizeFirstLetter(professional.address)}</div>
                                                                <div className='text-black-opacity-5 fs-6'>{capitalizeFirstLetter(professional.neighbourhood)}</div>
                                                            </td>
                                                        </>
                                                }
                                                <td>
                                                    {
                                                        professional.whatsapp ?
                                                            <a href={`https://api.whatsapp.com/send/?phone=${professional.whatsapp}`}>
                                                                <FontAwesomeIcon icon={faWhatsapp} size="2x" color='var(--secondary)'/>
                                                            </a>
                                                        :
                                                        <a href={`tel:+${professional.tel}`}>
                                                            <FontAwesomeIcon icon={faPhone} size="lg" color='var(--secondary)'/>
                                                        </a>
                                                    }
                                                </td>
                                            </tr>
                                        )})
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
