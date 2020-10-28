import React from "react";
import { Button, Icon } from 'antd';
import JoelLogo from '../../../assets/img/png/logo-white.png';
import './MenuTop.scss';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed}= props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                  className="menu-top__left-logo"
                  src={JoelLogo}
                  alt="Joel Salazar"
                />
                <Button type="link"  onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"}/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <Icon type="poweroff"/>
                </Button>
                </div> 
        </div>
    );
    
}