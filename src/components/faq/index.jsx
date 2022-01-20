import "./index.scss"
import {data} from './data.jsx'
import { useEffect, useState } from "react";


export const Faq = () => {
    const [faqs, setFaqs] = useState([])
    useEffect(() => {
        setFaqs(data)
    }, [])

return (
<div className="site-section site-block-3" id='faq'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="row mb-5 justify-content-center">
                <div className="col-md-6 text-center">
                    <h2 className="site-heading text-black mb-5">Consultas <strong>Frecuentes</strong></h2>
                </div>
            </div>
            <div className="col-lg-10">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                {
                    faqs.map((el, index)=>{
                        return(
                            <div key={index*Math.random()} className="accordion-item">
                                <h2 className="accordion-header" id={`flush-heading${index}`}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#flush-collapse${index}`} aria-expanded="false"
                                        aria-controls={`flush-collapse${index}`}>
                                        {el.q}
                                    </button>
                                </h2>
                                <div id={`flush-collapse${index}`} className="accordion-collapse collapse"
                                    aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {
                                            el.r.map(resp=>{return(
                                                <p key={Math.random()} className="text-black-opacity-5" >{resp}</p>

                                            )})
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
</div>
)
}