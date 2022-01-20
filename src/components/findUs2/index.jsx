import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {capitalizeFirstLetter} from '../../utils/index'
import { data } from './data.jsx'
import './index.scss'

export const FindUs2 = () => {

    const [professionals, setProfessionals] = useState([]);
    const [city, setCity] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');

    const [cities, setCities] = useState({});
    const [neighbourhoods, setNeighbourhoods] = useState([]);

    var citiesList = {}
    var allNeighbourhoods = []
 
    const addAllCities = ()=>{
        data.forEach(el=>{
            if(!citiesList.hasOwnProperty(el.city)) {
                citiesList[el.city] = []
            }
            !citiesList[el.city].includes(el.neighbourhood) && citiesList[el.city].push(el.neighbourhood)
        })
        setCities(citiesList)
    }

    const addAllNeighbourhoods = () => {
        for (const [key, arr] of Object.entries(citiesList)) {
            arr.map(el=>{
                allNeighbourhoods.push(el)
            })
        }
        setNeighbourhoods(allNeighbourhoods)    
    }
    
    const filterByCity = (el)=>{
        const citySelected = el.target.value
        setCity(citySelected)
        if( !citySelected ){
            addAllNeighbourhoods()
            setProfessionals(data)
        } else {
            const filteredProfessionals = data.filter(el=>el.city === citySelected)
            setNeighbourhoods(cities[citySelected]);
            setProfessionals(filteredProfessionals)
        }  
    }

    const filterByNeighbourhood = (el)=>{
        const neighbourhoodSelected = el.target.value
        setNeighbourhood(neighbourhoodSelected)
        if( !neighbourhoodSelected ){
            const filteredProfessionals = data.filter(el=>el.city === city)
            setProfessionals(filteredProfessionals)
        } else {
            const filteredProfessionals = data.filter(el=>el.neighbourhood === neighbourhoodSelected)
            setProfessionals(filteredProfessionals)
            setNeighbourhood(neighbourhoodSelected)
        }  
    }
    
    useEffect(() => {
        addAllCities()
        addAllNeighbourhoods()
        setProfessionals(data)
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
                                <select className='form-select' name="city" value={city} onChange={filterByCity} >
                                    <option value=''>TODAS</option>
                                    {   Object.keys(cities).map(el=><option key={Math.random()} value={el}>{el.toUpperCase()}</option>) }
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="neighbourhood" className="form-label">Ciudad/Barrio</label>
                                <select className='form-select' name="neighbourhood" value={neighbourhood} onChange={filterByNeighbourhood}>
                                    <option value=''>TODAS</option>
                                    {   neighbourhoods.map(el=><option value={el} key={Math.random()}>{el.toUpperCase()}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-8 overflow-auto" style={{height: '50vh'}}>
                            <table className="table align-middle ">
                                <thead>

                                </thead>
                                <tbody >
                                    {
                                        professionals.map(professional=>{return(
                                            <tr key={Math.random()} style={{borderBottom: '4px solid #f8f9fd'}}>
                                                <th><img src={`${process.env.PUBLIC_URL}/images/logo4.jpg`} alt="" width={'90px'} style={{borderRadius:'50%'}} /></th>
                                                <td className='fw-bold'>{capitalizeFirstLetter(professional.name)}</td>
                                                {/* <td className='text-black-opacity-5'>{professional.neighbourhood}</td> */}
                                                <td>
                                                    <div>{capitalizeFirstLetter(professional.address)}</div>
                                                    <div className='text-black-opacity-5'>{capitalizeFirstLetter(professional.neighbourhood)}</div>
                                                    </td>
                                                <td>
                                                    {
                                                        professional.whatsapp ?
                                                            <Link to={`https://api.whatsapp.com/send/?phone=${professional.whatsapp}`}>
                                                                <FontAwesomeIcon icon={faWhatsapp} size="lg" color='var(--secondary)'/>
                                                            </Link>
                                                        :
                                                        <Link to={`tel:+${professional.tel}`}>
                                                            <FontAwesomeIcon icon={faPhone} size="lg" color='var(--secondary)'/>
                                                        </Link>
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
