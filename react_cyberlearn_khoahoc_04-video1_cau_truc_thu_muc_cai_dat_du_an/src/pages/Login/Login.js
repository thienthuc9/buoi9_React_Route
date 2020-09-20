import React, { useState } from 'react'
import swal from 'sweetalert2'

export default function Login(props) {

    // const [state, setState] = useState({
    //     userLogin: {
    //         userName: '',
    //         passWord: ''
    //     }
    // })
    const[userLogin,setUserLogin] = useState({
        userName: '',
           passWord:'' 
    })
    console.log(userLogin)
    const handleChane = (e) => {
        const { value, name } = e.target;

        setUserLogin({
            ...userLogin,[name]:value
        })
    }
    const login = (e) => {
        e.preventDefault(); //ngăn sự kiện sau khi submit reload lại trang
        // kiểm tra userName,pass = cybersoft => chuyển về trang chủ
        if(userLogin.userName === '123' && userLogin.passWord ==='123'){
            // props.history.goBack(); trả về trang trước link đến trang này
            swal.fire(
                '',
                'Đăng nhập thành công',
                'success'
                
              )
              props.history.push('/home')
            // chuyển hướng đến trang chỉ định (path)=> home

        }else{
            swal.fire(
                '',
                'Mật khẩu sai',
                'error'
              )
        }
    }
    return (
        <div>
            <form className='container' onSubmit={login}>
                <h3 className='text-center  '>Login</h3>
                <div className='form-group'>
                    <p>User Name</p>
                    <input name='userName' className='form-control' onChange={handleChane}></input>
                </div>
                <div className='form-group'>
                    <p>Password</p>
                    <input name='passWord' className='form-control' onChange={handleChane}></input>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}


