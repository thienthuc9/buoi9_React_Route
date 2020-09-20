
import React, { useState } from 'react'
import axios from 'axios'

export default function Home(props) {
    const [dsPhim, setDsPhim] = useState([])
    const getFilm = () => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/Quanlyphim/laydanhsachphim?maNhom=GP01',
            method: 'GET'
        }).then(res => {
            console.log('kết quả', res.data)
            setDsPhim(res.data)
        }).catch(err => {
            console.log('kết quả', err.response.data)
        })
    }
    const renderPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className='col-4' key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} onError={(e)=>{
                        e.target.src ='http://picsum.photos/300/300'
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>
            </div>

        })
    }
    return (
        <div className='container'>
            <button onClick={() => {
                getFilm();
            }}>Lấy DS Phim</button>
            <h3>DS Phim</h3>
            <div className='row'>
                {renderPhim()}
            </div>
        </div>
    )
}

