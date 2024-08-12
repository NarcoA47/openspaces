import React from 'react'
import {Button, Form, Input} from 'antd'
import './CreateAccount.css'
import NavBar from '../../components/Header'
import Footer from '../../components/Footer'
import SideImage from '../../img/Interior/pic1.jpg'
import {Link, useNavigate, redirect} from 'react-router-dom'
import axios from 'axios'
import FormItem from 'antd/es/form/FormItem'


const CreateAccount = () => {
    
    const navigate = useNavigate();

    const handlerSubmit = async (value) => {
        try {
            await axios.post('/api/user/register', value);
            message.success("Register Successful");
            navigate("/Login");
        }catch {
            message.error("Error!")
            console.log(error)
        }
    }

  return (
    <div className="CreateAccount">
        <div className='max-width'>
        <div className="NavBar">
            <NavBar/>
        </div>
       
    <div className='CreateAccount-container'>
    <div className='image'>
        <img src={SideImage}/>
    </div>
        <div className='form-container'>
        <Form className="form" onFinish={handlerSubmit}>
        <center> 
                <div className='text-title'>
                <h1>Welcome!</h1>
                <p1>Enter Your Details Below to create account</p1>
                </div>
                <div className="name">
                <ul>
                    
                    <li>
                    <FormItem name="firstname" className="email" tabIndex="1">
                    <Input placeholder="First Name"/>
                    </FormItem>
                    </li>
                    
                    <li>
                    <FormItem name="lastname" className="email" tabIndex="1">
                    <Input placeholder="Last Name" />
                    </FormItem>
                    </li>
                    
                    <li>
                    <FormItem type="email" name="email" className="email" tabIndex="1">
                    <Input placeholder="Email"/>
                    </FormItem>
                    </li>
                    <li>
                    <FormItem name="phone" className="email" tabIndex="1">
                    <Input placeholder="Phone"/>
                    </FormItem>
                    </li>
                    <li>
                    <FormItem name="password" id="password" className="password" tabIndex="2">
                    <Input type="password" placeholder="Password"/>
                    </FormItem>
                    </li>
                </ul>
                <div className='button'>
                <Button htmlType='submit'>Create Account</Button>
                </div>
            </div>
            </center>
            </Form>
            <center>
            <div className='LoginAccountbtn'>
                <li>
                    I already have an account <Link className='Loginbtnini' to="../Login">Log in</Link>
                </li>
            </div>
            </center>
            </div>
        </div>
    </div>
    <Footer/>
    </div>

    
    
  )
}
export default CreateAccount