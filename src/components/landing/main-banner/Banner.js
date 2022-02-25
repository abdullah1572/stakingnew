/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './banner.scss';
import { useWeb3React } from '@web3-react/core'
import useApprove from '../../../hooks/useApprove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stakinginfo from '../stakinginfo/Stakinginfo';
const Banner = () => {

    const { account } = useWeb3React();
    const { Approve } = useApprove()
    const [minted, setMinted] = useState(false);
    const [inProcess, setInProcess] = useState(false);

    const appoved = async (e) => {
        if (account) {
            try {
                e.preventDefault();
                setInProcess(true)
                const tx = await Approve()
                if (tx) {
                    toast.success('Successfully Approved', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    setMinted(true)
                }
                setInProcess(false)
                window.$("#exampleModalLong2").modal('hide');

            }
            catch (err) {
                console.log(err)
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                setInProcess(false)
            }
        }
        else {
            window.$("#exampleModalLong2").modal('hide');
            toast.error('Please Connect to wallet', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }


    return (
        <>
            <section className="main-banner ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-5 mb-md-0">
                            <div className="inner-content text-center ptb">
                                <img src='opencanvas-assets/DJT-NFT-staking/no-nft-illustration.svg' className='img-fluid' alt="nft-img" />
                                <h3 style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "40px", color: "white" }}>No NFTs found</h3>
                                <p className='bluegrey mt-2' style={{ fontFamily: "Ink Free, Times, serif", fontSize: "17px", color: "white" }}>Connect your wallet that has your DJT collection NFTs</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="">
                                <Stakinginfo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
