import React from "react";
import './a.css';
const Mahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            
            <div className="gambar-mahasiswa">
    
                <img  src="https://placeimg.com/640/480/tech/sepia" alt="Gambar Tumbnail Mahasiswa" />    
            </div>

            <div className='table'>
            <div className="kiri">
                <table className="table table-borderless">
                    
                    <tr>
                        <td>ID</td>
                        <td>:</td>
                        <td>{props.idbarang}</td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{props.nama}</td>
                    </tr>
                    <tr>
                        <td>Harga</td>
                        <td>:</td>
                        <td>{props.harga}</td>
                    </tr>
                   
                </table>
               
            </div>
            
            <table>
            <tr className='kanan'>
                        <td>Stok</td>
                        <td>:</td>
                        <td>{props.stok}</td>
                        <button className="button button1" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Beli</button>
                </tr>
              
            </table>
            
            
            </div>
            </div>
           
        
        
    )
}

export default Mahasiswa;