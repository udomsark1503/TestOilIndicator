import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import Swal from 'sweetalert2';

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await Swal.fire({
            icon: 'success',
            title: 'Log Out',
            text: 'success!'
          })
            sessionStorage.removeItem('username');
            navigate('/');
          }
    return (
        <div className="navbar">
            <div>
                <a href="/home"><img src="LOGO Smart Com.png" className="LOGOSCC"></img></a>
            </div>
            <div>
                <Button className='primary' onClick={handleSignOut}>Sign Out</Button>
            </div>
        </div>
    )
}
export default Header;