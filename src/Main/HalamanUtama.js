import React from "react";
import { Link } from "react-router-dom";

export default class Halamanutama extends React.Component {
    render(){
        return(
            <div class="halaman-utama">
                <div class="container">
                <h1>Beli premium.</h1>
                <h2>Nikmati lagu tanpa iklan</h2>
                <Link to="/playlist">
                    <a class="btn ujicoba" 
                        ><span>Uji Coba Gratis</span>
                    </a>
                </Link>
                <p>*Persyaratan dan ketentuan berlaku</p>
                <h3>
                    Silahkan tekan tombol Web Music Player atau
                    Uji Coba Gratis
                    untuk melanjutkan ke halaman berikutnya.</h3>
                </div>
            </div>
        );
    }
}
