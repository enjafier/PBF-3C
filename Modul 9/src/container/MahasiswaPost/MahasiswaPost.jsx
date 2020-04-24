import React, { Component } from "react";
import './MahasiswaPost.css';
import Mahasiswa from "../../component/MahasiswaPost/Mahasiswa";

class MahasiswaPost extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            userId: 1,
            idbarang: "",
            nama: "",
            harga: "",
            stok: "",
           
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="idbarang" className="col-sm-2 col-form-label">ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="idbarang" id="idbarang" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="nama" id="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="harga" className="col-sm-2 col-form-label">Harga</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="harga" id="harga" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="stok" className="col-sm-2 col-form-label">Stok</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="stok" id="stok" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Barang</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Mahasiswa
                            key={mahasiswa.id}
                            idbarang={mahasiswa.idbarang}
                            nama={mahasiswa.nama}
                            harga={mahasiswa.harga}
                            stok={mahasiswa.stok}
                            
                            idMahasiswa={mahasiswa.id}
                            hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;