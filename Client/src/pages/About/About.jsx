
import './About.css';

import Navbar from '../../components/Header'
import Footer from '../../components/Footer'
import home from "../../img/Exterior/pic1.jpg";
import away from "../../img/Exterior/Madara Uchiha's Great Words__Reality and His World.mp4";


function About () {
    return (
    <div className="Aboutus">
        <div className="NavBarAbout">
                <Navbar/>
        </div>
         <div className="BackgroundVideo">
                <video src={away} controls={true} width="100%"></video>
                
                <div className="Text">
                    <h2>Join Unistay Rooms</h2>
                </div>
        </div>
        
        <div className="max-width Body-Container-About">
            <div className="AboutUsCategory">
                <div className="Text-Area">
                    <h3>ABOUT US</h3>
                    <p>This is the main text area, Here you will find the description of our product.</p>
                </div>
                <div className="PhotArea">
                    <div className="Collage">
                        <div className="CEO">
                        <img src={home} alt="home"/>
                        </div>
                        <div className="Sabordniates">
                        <img src={home} alt="home"/><br/>
                        <img src={home} alt="home"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="OurMission">
                <div className="OurMissionText">
                    <h2>We are working with</h2>
                </div>
                <div className="">
                    <div className="Items">
                        <span className="icon"></span>
                        <span className="Name"></span>
                    </div>
                    <div className="Items">
                        <span className="icon"></span>
                        <span className="Name"></span>
                    </div>
                    <div className="Items">
                        <span className="icon"></span>
                        <span className="Name"></span>
                    </div>
                    <div className="Items">
                        <span className="icon"></span>
                        <span className="Name"></span>
                    </div>
                    <div className="Items">
                        <span className="icon"></span>
                        <span className="Name"></span>
                    </div>
                    <div className="Items">
                        <span className="icon"></span>
                        <span className="Name"></span>
                    </div>
                </div>

            </div>

        <div><h4> MAKE IT HAPPEN</h4>

                <p>Founded in 2012, ByteDance's mission is to inspire creativity and enrich life. With a suite of more than a dozen products, including TikTok, Helo, and Resso, as well as platforms specific to the China market, including Toutiao, Douyin, and Xigua, ByteDance has made it easier and more fun for people to connect with, consume, and create content.</p></div>
                <div class="row">
                <div class="About-col">
                    <h3>For LandLord</h3>

                    <p>We’ve designed a booking form that tenants complete which includes:

                        <li>A profile picture of the tenant</li>
                        <li>Name</li>
                        <li>Ideal move-in date</li>
                        <li>Dream lease period</li>
                        <li>Whether they are a student or a young adult</li>
                        <li>Where they studying (if applicable)</li>
                        <li>Whether they are an undergrad or postgrad (if applicable)</li>
                        <li>The rent payer</li>
                        By adding this we are able to screen for quality and intent, saving you time scrolling through hundreds of non-starter enquiries from other platforms. We then ask them to send the first message in the Digs chat to ask any questions they may have. You can then chat directly with them!

                        You’ll get an email and SMS every time you get an enquiry or new message. Then the timer starts! You only have 48 hours to get back to the tenant, or the booking enquiry will expire. We have found that the faster the reply, the higher the likelihood of the deal being successful.

                        We also have a full-time team who are available to guide you through the entire process! We only charge on success, so if you don’t find a tenant that meets your requirements then you don’t pay.</p>
                </div>
                <div class="About-col">
                    <h3>For Tenant</h3>
                    <p>We’ve designed a booking form that tenants complete which includes:

                        <li>A profile picture of the tenant</li>
                        <li>Name</li>
                        <li>Ideal move-in date</li>
                        <li>Dream lease period</li>
                        <li>Whether they are a student or a young adult</li>
                        <li>Where they studying (if applicable)</li>
                        <li>Whether they are an undergrad or postgrad (if applicable)</li>
                        <li>The rent payer</li>
                        By adding this we are able to screen for qua
                        lity and intent, saving you time scrolling through hundreds of non-starter enquiries from other platforms. We then ask them to send the first message in the Digs chat to ask any questions they may have. You can then chat directly with them!

                        You’ll get an email and SMS every time you get an enquiry or new message. Then the timer starts! You only have 48 hours to get back to the tenant, or the booking enquiry will expire. We have found that the faster the reply, the higher the likelihood of the deal being successful.

                        We also have a full-time team who are available to guide you through the entire process! We only charge on success, so if you don’t find a tenant that meets your requirements then you don’t pay.</p>
                </div>
                <div class="About-col">
                    <h3>For Tenant</h3>
                    <p>We’ve designed a booking form that tenants complete which includes:

                        <li>A profile picture of the tenant</li>
                        <li>Name</li>
                        <li>Ideal move-in date</li>
                        <li>Dream lease period</li>
                        <li>Whether they are a student or a young adult</li>
                        <li>Where they studying (if applicable)</li>
                        <li>Whether they are an undergrad or postgrad (if applicable)</li>
                        <li>The rent payer</li>
                        By adding this we are able to screen for quality and intent, saving you time scrolling through hundreds of non-starter enquiries from other platforms. We then ask them to send the first message in the Digs chat to ask any questions they may have. You can then chat directly with them!

                        You’ll get an email and SMS every time you get an enquiry or new message. Then the timer starts! You only have 48 hours to get back to the tenant, or the booking enquiry will expire. We have found that the faster the reply, the higher the likelihood of the deal being successful.

                        We also have a full-time team who are available to guide you through the entire process! We only charge on success, so if you don’t find a tenant that meets your requirements then you don’t pay.</p>
                </div>
                </div>
                <div className="Footer-Container-About">
                <Footer/>
                </div>
            </div>
        </div>

    )
}

export default About