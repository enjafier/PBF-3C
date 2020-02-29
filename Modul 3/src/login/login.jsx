import React from 'react';
import './login.css'


class login extends React.Component{   
    render(){
        return ( 
            <div>
                <p></p>
            <h2 className='tengah'>Form Login</h2>
            <form className='kotak_login' >
            <h2 className='tengah'>Tugas Pertemuan Ketiga</h2>

            <div className='tengah' className=''>
            <label >Username : </label>
			<input className='textfield' placeholder=' masukan username' type='text'/>
            <label>Password :</label>
            <input className='textfield' placeholder=' masukan password' type='text'/>
            </div>
            <p></p>
            <div className='tengah'>
            <button type='submit' className='tombol_login'>Login</button>
            <input  type="checkbox" />
            <label >Remember Me  </label>
            </div>

            <p></p>
            <div className='tengah'>
            <button  className='tombol_cancel'>Cancel</button>
            </div>

            </form>
            </div>
          );
    }
    
}


export default login;