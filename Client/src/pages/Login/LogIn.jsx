import React from 'react'
import {Button, Form, Input} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import './LogIn.css'
import {Link, useNavigate, redirect} from 'react-router-dom'
import axios from 'axios'
import NavBar from '../../components/Header'
import Footer from '../../components/Footer'
import {FaFacebookF, FaGoogle} from 'react-icons/fa'
import SideImage from '../../img/Interior/pic1.jpg'


const LogIn = () => {
    
    const navigate = useNavigate();
    const RedirectItem = redirect();

    const handlerSubmit = async (value) => {
        try {
            const res = await axios.post('/api/user/login', value);
            message.success("Login Successful");
            console.log("login success")
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate("/");
        }catch {
            message.error("Error!")
            console.log(error)
        }
    }
    
  return (
    <div className="log-in">
        <div className='max-width'>
        <div className="NavBar">
            <NavBar/>
        </div>
       
    <div className='LogIn-container'>
    <div className='image'>
    <img src={SideImage}/>
    </div>
        <div className='form-container'>
        <Form className="form" onFinish={handlerSubmit}>
        <center> <h1>Welcome Back!</h1>
            <p1>Enter your details below to login</p1>
            <div className="name">
            <ul>
                <li>
                <FormItem type="email" name="email" className="email" tabIndex="1">
                <Input placeholder="Email"/>
                </FormItem>
                </li>
    
                <li>
                <FormItem name="password" id="password" className="password" tabIndex="2">
                <Input type="password" placeholder="Password"/>
                </FormItem>
                </li>
                <li>
                Forgot <a href="#"> password? </a>   
            
                </li>
            </ul>
            <div className='button'>
                    <Button htmlType='submit'>Login</Button>
            </div>
            </div>
            </center>
            </Form>
            <center>
            <p1> OR continue With?</p1>
            
            <div className='icons'>
                <div className='button'>
                <button><span><FaFacebookF/></span>Facebook</button>
                </div>
                </div>
                <div className='icons'>
                <div className='button'>
                <button><span><FaGoogle/></span>Google</button>
                </div>
                </div>
                <div className='CreateAccountbtn'>
                    <li>
                    Do you have an account? <Link className='Loginbtnini' to="../CreateAccount">Create Account</Link>
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
export default LogIn