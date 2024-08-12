import './ContactUs.css'
import NavBar from '../../components/Header'
import Footer from '../../components/Footer'
import Garden from './Garden.svg'

function ContactUs () {
    return (
    <div className="contact-us">
        <div className='max-width'>
        <div className="NavBar">
            <NavBar/>
        </div>
        <div className="ContactUs-container">
        <div className='HeadingText'>
            <div className='Text common-heading'>
                <h1>We Would Love to Hear From you!</h1>
            </div>
            <div className="ImageContainer">
               <img src={Garden} alt='Garden'/> 
            </div>
        </div>
    
            
        <div className='contact-form'>
            <p className='paragraph'>Reach out to us and we will <br/> be sure to get back to you<br/> We're here for you</p>
            
            <form className="form">
            <h2 className=''>Please note: Unistayrooms DOES NOT own or operate any<br/>student accommodation</h2> 
                <div className="name">
                <ul>
                    <li><label for="firstName"></label>
                    <input
                        type="text"
                        name="firstName"
                        className="firstName"
                        tabIndex="1"
                        placeholder="First Name"
                    />
                    </li>
                    <li>
                    <label for="lastName"></label>
                    <input
                        type="text"
                        name="lastName"
                        className="lastName"
                        tabIndex="2"
                        placeholder="Last Name"
                    />
                    </li>
                    <li>
                    <label for="email"></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="email"
                        placeholder="Email"
                        tabIndex="3"
                    />
                    </li>
                    <li>
                    <label for="message"></label>

                    <textarea
                        placeholder="Type your message here..."
                        className="message"
                        name="message"
                    />
                    </li>
                </ul>
                <li>
                    <div className='button'>
                    <button>Submit</button>
                    </div>
                </li>
            </div>
            </form>
        </div>
        </div>
    </div>
    <div className="Footer">
        <Footer/>
    </div>
</div>
    )
}

export default ContactUs