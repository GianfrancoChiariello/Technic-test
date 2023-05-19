import './suscribe.style.css'
import NavBar from '../../components/recycle/navbar/NavBar'
import Form from '../../components/suscribe/Form'

const Suscribe = () => {
    return (
            <section className='suscribe_section'>
                <NavBar/>
                <div className='suscribe_div'>
                    <div className='suscribe_sub_div'>
                        <div className='suscribe_div_left'>
                            <div className='suscribe_div_left_text'>
                                <h1>potenciamos tu bienestar</h1>
                                <p>Comenza hoy a buscar tu mejor version</p>
                                <button>¡Incribite ahora!</button>
                            </div>
                        </div>

                        
                        <div className='suscribe_div_right'>
                            <h1>informacion</h1>
                            <Form/>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Suscribe