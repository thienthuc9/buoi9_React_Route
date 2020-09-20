import React from 'react'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert2'


export default function Profile() {
    if(localStorage.getItem('userLogin')){
        return <div className='display-4'>Hello cybersoft</div>
    }else{
        swal.fire(
            '',
            'Bạn cần đăng nhập',
            'warning'
            
          )
        return <Redirect to='./login'></Redirect>
            
        
    }
    
}
