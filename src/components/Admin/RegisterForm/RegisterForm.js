import React, { useState } from 'react';
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import { emailValidation, minLengthValidation } from "../../../utils/formValidation";


export default function RegisterForm(){
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        repeatPassword:"",
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = e => {
        if(e.target.name === "privacyPolicy")
        setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            });
        else{
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }
    };

    const inputValidation= e =>{
        const {type, name} = e.target;

        if(type === "email"){
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            });
        } 

        if(type === "password"){
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            });
        }

        if( type === "checkbox"){
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            })
        }
    }

    const register = e =>{
        e.preventDefault();

    }
    return(
        <Form className="register-form" onSubmit={register} onChange={changeForm}>
            <Form.Item>
                <Input 
                    prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />}
                    type="email"
                    name="email"
                    placeholder="Corre electrónico"
                    className="register-form__input"
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir Contraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    checked={inputs.privacyPolicy}
                    onChange={inputValidation} 
                >
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}