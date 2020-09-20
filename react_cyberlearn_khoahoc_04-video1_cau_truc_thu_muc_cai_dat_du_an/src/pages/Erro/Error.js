import React from 'react'

export default function Error(props) {
    return (
        <div>
            Không tìm thấy trang :{props.location.pathname}
            <button onClick={()=>{
                props.history.push('home')
            }}>Trở lại trang chủ</button>
        </div>
    )
}
