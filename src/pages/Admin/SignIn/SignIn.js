import React from "react";
import {Layout, Tabs} from 'antd';
import './SignIn.scss';
import Logo from '../../../assets/img/png/logo-white.png';
import {Redirect} from 'react-router-dom';
import RegisterForm from '../../../components/Admin/RegisterForm';
import {getAccessTokenApi} from '../../../api/auth';
import LoginForm from '../../../components/Admin/LoginForm';


export default function SignIn(){
    const { Content } = Layout;
    const { TabPane } = Tabs;

    if(getAccessTokenApi()){
      return <Redirect to="/admin"/>
    }

    return(
       <Layout className="sign-in">
           <Content className="sign-in__content">
               <h1 className="sign-in__content-logo">
                 <img src ={Logo} alt="Joel Salazar"/>
               </h1>
               <div className="sign-in__content-tabs">
                 <Tabs type="card">
                  <TabPane tab={<span>Entrar</span>} key ="1">
                    <LoginForm />
                  </TabPane>
                  <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                      <RegisterForm/>
                  </TabPane>
                 </Tabs>
               </div>
           </Content>
       </Layout> 
    );
}