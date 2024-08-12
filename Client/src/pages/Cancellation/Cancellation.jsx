import './Cancellation.css'

import Navbar from '../../components/Header'
import Footer from '../../components/Footer'
import CancellationPageImage from '../../img/CancellationPage/Houses.jpg'
import Flexible from '../../components/Flexible'

function Cancellation () {
    return (
        <div className='CancellationPage'>
            <Navbar/>
            <div className='CancellationPageBody'>
                <div className='CancellationPageImg'>
                    <img src={CancellationPageImage} />
                </div>

                <div className='CancellationHeading'>
                    <h1> Cancellation Policy</h1>
                </div>
                <div className='CancellationNavAndSection'>

                <div className='CancellationNav'>
                    <nav className='CancellationNavSection'>
                        <a href="#">Flexible</a>
                        <a href="#">Moderate</a>
                        <a href="#">Strict</a>
                        <a href="#">Non-refundable</a>
                    </nav>
                </div>

                <section className='CancellationNavClick'>
                    
                </section>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
export default Cancellation