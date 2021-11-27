import { InlineWidget } from "react-calendly";

export const Booking = () => {
    const url = 'https://calendly.com/agustintafura/smilemakers'
    return (

        <div id="booking" className="site-block-half d-block d-lg-flex site-block-video" style={{position:'relative'}}>
            <div className="text" style={{zIndex:1}}>
                <h2 className="site-heading text-black mb-5">
                    Turno <strong>Online</strong>
                </h2>
                <p className="lead">Aquí podrás obtener tu turno para la primera consulta en nuestro Centro ubicado en Av. Corrientes 4924, piso 6, Capital Federal.</p>
                <p> Durante la primera consulta efecturemos un <strong>Diagnóstico Personalizado</strong> de tu caso y podremos realizar el <strong>Escaneo intraoral</strong> de tu boca con el que obtendremos un model digital 3D de tu boca</p>
            </div>
                {/* <img width='330px' src={`${process.env.PUBLIC_URL}/images/braces2.png`} alt="smilemakers braces alineadores invisibles" 
                className="img-fluid" style={{position:'absolute', top:'50%'}}/> */}
            <div className="col-lg-5 ">
                <InlineWidget  
                    url={url}   
                    styles={{minWidth: '360px', height: '930px',overflow: 'hidden'}}
                    prefill={{}}
                />
            </div>

    </div>
    )
}