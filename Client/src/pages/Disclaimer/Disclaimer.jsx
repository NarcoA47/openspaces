import react from 'react';
import './Disclaimer.css'
import {Button, Form, Input} from 'antd'
import NavBar from '../../components/Header'
import Footer from '../../components/Footer'

function Disclaimer () {
    return (
        <div className="max-width Disclaimer-Container">
            <div className="nav-bar">
            <NavBar/>
            </div>
            <div className="max-width Disclaimer-Content">
            <Form>
                <div className="Container">
                <div className="title">
                    <h2>Unistay Rooms Disclaimer</h2>
                </div>
                <div className="Content">
                    <p>
                        Thank you for  using our services please read the following and understand the terms of use of our platform, for we will not be held accountable for any users who do not read and understand the terms stated below. Thank you.
                    </p>
                </div>
                <div className="Collector">
                    <input type="checkbox" id="disclaimer" name="disclaimer" value="disclaimer"/>
                    <lable for="agreement">I have read and agreed to the terms above</lable><br/>
                    <Button Htmltype="submit"><a href='https://flutterwave.com/pay/1v4bsq7xuifw'>Next</a></Button>
                </div>
            </div>
            </Form>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Disclaimer;