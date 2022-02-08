import "./index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faMapMarkerAlt, faPhoneSquare, faHashtag, faAt } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';


export const Form = () => {
    
    const [emailSent, setEmailSent] = useState(false);
    const history = useHistory();
    
    const submitForm = (e) => {
        e.preventDefault()
        const formData = {}
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input=>formData[input.name] = input.value)        

        if (!emailSent) {
            emailjs.send(
                process.env.REACT_APP_EMAILJS_YOUR_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_YOUR_TEMPLATE_ID_THANKSFORYOURPURCHASE,
                formData,
                process.env.REACT_APP_EMAILJS_YOUR_USER_ID,
            ).then(() => {
                toast(
                    <div>
                        <h5 style={{fontWeight:'800'}}>Hemos recibido tu solicitud</h5>
                        Nos contactaremos a la brevedad.<br/>
                        ¡Muchas gracias!
                    </div>
                , {
                    onClose: ()=>history.push("/"),
                    autoClose:25000,
                    position: "top-center",
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setEmailSent(true)
            }).catch((err)=>{
                toast.error(
                    <div>
                        <h5 style={{fontWeight:'800'}}>Error al enviar la solicitud</h5>
                        Inténtalo nuevamente.
                    </div>
                , {
                    autoClose:25000,
                    position: "top-right",
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            });            
        }

    }

    useEffect(() => {
        const inputs = document.querySelectorAll('input, select')

        inputs.forEach(element=>{
            const siblingElement = element.previousElementSibling 
            element.addEventListener('focus', ()=>siblingElement.style.borderColor = 'var(--secondary)')
            element.addEventListener('blur', ()=>siblingElement.style.borderColor = '#ced4da')
        })
        return () => {
            inputs.forEach(element=>{
                const siblingElement = element.previousElementSibling
                element.removeEventListener('focus', ()=>siblingElement.style.borderColor = 'var(--secondary)')
                element.removeEventListener('blur', ()=>siblingElement.style.borderColor = '#ced4da')
            })
            
        };
    }, []);
    

    

    return (
        <div className="container" id='profesional-form' data-aos="fade">
            <div className="row align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src={`${process.env.PUBLIC_URL}/images/form_od.png`} alt=""
                        className="img-fluid mb-3 d-none d-md-block"/>
                    <h2 className="site-heading mb-4">
                        Súmate al <strong>equipo Profesional</strong> SM<sup style={{fontVariant: "all-small-caps"}}>®</sup>
                    </h2>
                    {/* <h5 className="font-italic text-muted mb-0">Conviértete en un odontólogo profesional de SM<sup style={{fontVariant: "all-small-caps"}}>®</sup></h5> */}
                    <p className="font-italic text-muted mb-0">Comienza a ofrecer nuestros alineadores invisibles a tus pacientes.</p>
                    <p className="font-italic text-muted mb-0">Envía la solicitud y nos comunicaremos contigo para brindarte mayor información.</p>
                </div>

                {/* <!-- Registeration Form --> */}
                <div className="col-md-7 col-lg-6 ml-auto">
                    <form action="" onSubmit={submitForm}>
                        <div className="row">

                            {/* <!-- Fullt Name --> */}
                            <div className="input-group col-lg-6 mb-4">
                                <span className="input-group-text bg-white px-4 border-md border-end-0">
                                    <FontAwesomeIcon icon={faUser} size="lg" className="text-muted"/>
                                </span>
                                <input id="od_name" type="text" name="od_name" placeholder="Nombre y Apellido" minLength="5" required
                                    className="form-control bg-white border-start-0 border-md" disabled={emailSent? 'true': ''}/>
                            </div>

                            {/* <!-- Email Address --> */}
                            <div className="input-group col-lg-12 mb-4">
                                
                                <span className="input-group-text bg-white px-4 border-md border-end-0">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-muted"/>
                                </span>
                                
                                <input id="od_email" type="email" name="od_email" placeholder="Correo Electrónico" required
                                    className="form-control bg-white border-start-0 border-md" disabled={emailSent? 'true': ''}/>
                            </div>

                            {/* <!-- Phone Number --> */}
                            <div className="input-group col-lg-12 mb-4">
                                
                                <span className="input-group-text bg-white px-4 border-md border-end-0">
                                    <FontAwesomeIcon icon={faPhoneSquare} size="lg" className="text-muted"/>
                                </span>
                                
                                <input id="od_phone" type="tel" name="od_phone" placeholder="Teléfono de Contacto" minLength="8" required
                                    className="form-control bg-white border-md border-start-0 pl-3" disabled={emailSent? 'true': ''}/>
                            </div>


                            {/* <!-- Is profesional --> */}
                            <div className="input-group col-lg-12 my-4">
                                
                                <div className="form-check form-switch">
                                    <label className="form-check-label" htmlFor="ortodoncista">Soy Ortodoncista</label>
                                    <input className="form-check-input" type="checkbox" id="od_profesional" name="od_profesional"
                                    value='si' required disabled={emailSent? 'true': ''}/> 
                                </div>
                            </div>

                            {/* <!-- License Number --> */}
                            <div className="input-group col-lg-6 mb-4">
                                
                                <span className="input-group-text bg-white px-4 border-md border-end-0">
                                <FontAwesomeIcon icon={faHashtag} size="lg" className="text-muted"/>
                                </span>
                                
                                <input id="od_license_number" type="text" name="od_license_number" placeholder="Número de Matrícula" minLength="3" required
                                    className="form-control bg-white border-start-0 border-md" disabled={emailSent? 'true': ''}/>
                            </div>

                            {/* <!-- Profesional Address --> */}
                            <div className="input-group col-lg-12 mb-4">
                                
                                <span className="input-group-text bg-white px-4 border-md border-end-0">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-muted"/>
                                </span>
                                
                                <input id="od_address" type="tel" name="od_address" placeholder="Dirección del Consultorio" minLength="5" required
                                    className="form-control bg-white border-md border-start-0 pl-3" disabled={emailSent? 'true': ''}/>
                            </div>

                            {/* <!-- Social Media --> */}
                            <div className="input-group col-lg-12 mb-4">
                                
                                <span className="input-group-text bg-white px-4 border-md border-end-0">
                                    <FontAwesomeIcon icon={faAt} size="lg" className="text-muted"/>
                                </span>
                                
                                <input id="od_social_media" type="tel" name="od_social_media" placeholder="Link Redes Sociales (opcional)" disabled={emailSent? 'true': ''}
                                    className="form-control bg-white border-md border-start-0 pl-3"/>
                            </div>

                            {/* <!-- Submit Button --> */}
                            <div className="form-group col-lg-12 mx-auto mb-0">
                                <button type="submit" className="btn-primary btn  btn-block py-2" disabled={emailSent? 'true': ''}>
                                    <span className="font-weight-bold">ENVIAR SOLICITUD</span>
                                </button>
                            </div>

                            {/* <!-- Divider Text --> */}
                            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div className="border-bottom w-100 ml-5"></div>
                                <div className="border-bottom w-100 mr-5"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}