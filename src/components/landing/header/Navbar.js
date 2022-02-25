import React, { useState } from 'react';
import './navbar.scss';
// import "../../landing/header/nav.css";
import { useWeb3React } from '@web3-react/core'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
// import $ from "jquery";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });
const Navbar = () => {

    const { account } = useWeb3React();
    // console.log("account",account)
    const { login, logout } = useAuth();
    const connectwallet = () => {
        window.$("#exampleModalLong").modal('show');
    }
    const connectMetamask = () => {
        localStorage.setItem("connectorId", "injected")
        if (account) {
            logout()
        } else {
            login("injected")
        }
    }

    const trustWallet = async () => {
        localStorage.setItem("connectorId", "walletconnect")
        if (account) {
            logout()
        } else {
            login("walletconnect")
        }
    }

    return (
        <section className="main-navbar" >
            <div className="container">
                <nav className="navbar ptb20 navbar-expand-lg" style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "20px", color: "white" }}>
                    <a className="navbar-brand" href="/">
                        <img src="\loot\Rectangle.png" className="img-fluid" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="style-bar"></div>
                        <div class="style-bar"></div>
                        <div class="style-bar"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline text-center my-2 my-lg-0" >
                            <Link className="" to="/" style={{ color: "white" }}>HOME</Link>
                            <Link className="" to="/staking" style={{ color: "white" }}>STAKING</Link>
                            <Link className="" to="/Minting" style={{ color: "white" }}>Minting</Link>
                            {/* {account? <Link className="" to="/mynft">MY NFTS</Link>:""} */}

                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {account ? <button className="btn-common my-2 my-sm-0" type="button" onClick={logout} >Disconnect</button> :
                                <button className="btn-common my-2 my-sm-0" type="button" onClick={connectwallet} >CONNECT WALLET</button>}
                            {/* <button className="btn-common my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModalLong" >CONNECT WALLET</button> */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-sm-12 p-0">
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <h3 className="white modal-heading  text-center ">CONNECT WALLET</h3>
                                                            <div className="pop-content ptb20">
                                                                <ul className="">
                                                                    <li className="">
                                                                        <div className="">
                                                                            <button className="inner-tile" data-dismiss="modal" type="button" onClick={connectMetamask}>
                                                                                <img src="\opencanvas-assets\pop-up\connect-wallet\metamask.svg" className="img-fluid" alt="" />
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <span className="grey mr-4">MetaMask</span>
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                    <li className="">
                                                                        <div className="">
                                                                            <button className="inner-tile" data-dismiss="modal" type="button" onClick={trustWallet}>
                                                                                <img src="\opencanvas-assets\pop-up\connect-wallet\trust-wallet.svg" className="img-fluid" alt="" />
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <span className="grey">WalletConnect</span>
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                    {/* <li className="">
                                                                        <div className="">
                                                                            <a className="inner-tile" href="/">
                                                                                <img src="\opencanvas-assets\pop-up\connect-wallet\safepal.svg" className="img-fluid" alt="" />
                                                                                &nbsp;&nbsp;&nbsp;
                                                                                <span className="white">MetaMask</span>
                                                                            </a>
                                                                        </div>
                                                                    </li> */}
                                                                </ul>
                                                                <div className="ptb20">
                                                                    <a className=".grey" href="/">By connecting, I accept OpenCanvas Terms of Service</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;
