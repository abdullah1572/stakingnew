import React from 'react'
import './stakinginfo.scss'
function Stakinginfo() {
    const connectwallet = () => {
        window.$("#exampleModalLong3").modal('show');
    }
    const claim = () => {
        window.$("#exampleModalLong1").modal('hide');
        window.$("#exampleModalLong2").modal('show');
    }
    const cancel = () => {
        window.$("#exampleModalLong1").modal('hide');
    }
    return (
        <>
            <section className='stakinginfo'>
                <div className='container p-0'>
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className='stakinginfo-card w-100' style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "20px", color: "white" }} >
                                <h3>Staking Info</h3>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Staked</p></li>
                                    <li className='list-inline-item'><p>≈ $0.00</p></li>
                                </ul>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Staked</p></li>
                                    <li className='list-inline-item'><p>≈ $0.00</p></li>
                                </ul>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Staked</p></li>
                                    <li className='list-inline-item'><p>≈ $0.00</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 p-0">
                            <div className='stakinginfo-card stakinginfo-card-claim w-100' style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "20px", color: "white" }}>
                                <h3>Earned Reward</h3>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>

                                    <li className='list-inline-item'><p>≈ $0.00</p></li>
                                    <li className='list-inline-item'><button onClick={connectwallet} className='btn-Outline claim-btn'>Claim</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 p-0">
                            <div className='stakinginfo-card w-100' style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "20px", color: "white" }}>
                                <h3>Staking Info</h3>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Total NFTs</p></li>
                                    <li className='list-inline-item'><p>0</p></li>
                                </ul>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Staked</p></li>
                                    <li className='list-inline-item'><p>0</p></li>
                                </ul>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Unstaked</p></li>
                                    <li className='list-inline-item'><p>0</p></li>
                                </ul>
                                <ul className='list-inline card-item d-flex justify-content-between align-item-center bluegrey'>
                                    <li className='list-inline-item'><p>Unsliked</p></li>
                                    <li className='list-inline-item'><p>0</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="modal fade" id="exampleModalLong1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-sm-12 p-0">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h3 className="white modal-heading  text-center">Claim</h3>
                                                    <div className='pop-content'>
                                                        <p className='text-justify mt-2 grey'>When your NFTs are locked and you would like to claim your rewards, you are ONLY able to receive
                                                            the portion of your rewards equivalent to the rewards that you would have earned from selecting
                                                            the "No Lock” staking option. Your entire staking reward amount(s) become(s) available upon the
                                                            completion of the associated staking session(s).</p>
                                                        <ul className='bluegrey ptb20'>
                                                            <li>
                                                                <p>Available upon staking completion</p>
                                                            </li>
                                                            <li >
                                                                <p>≈ $1.17</p>
                                                            </li>
                                                            <li className="mt-sm-4 mt-2 pt-2 pt-sm-4 avail-now">
                                                                <p>Available now</p>
                                                            </li>
                                                            <li >
                                                                <p>≈ $1.17</p>
                                                            </li>
                                                        </ul>
                                                        <ul className='list-inline btn-div text-center'>
                                                            <li className='list-inline-item'>
                                                                <button onClick={cancel} className='btn-common-white'>Cancel</button>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <button onClick={claim} className='btn-common'>Claim</button>
                                                            </li>
                                                        </ul>
                                                        <div className="ptb20 text-center">
                                                            <a className="grey" href="#">By connecting, I accept OpenCanvas Terms of Service</a>
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
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="modal fade" id="exampleModalLong2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-sm-12 p-0">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h3 className="white modal-heading  text-center">Claim</h3>
                                                    <div className='pop-content'>
                                                        <div className="row">
                                                            <div className="col-12 m-auto">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <ul className='list-inline d-flex align-item-center'>
                                                                            <li className='list-inline-item'>
                                                                                <div>

                                                                                    <img src="/opencanvas-assets/DJT-NFT-staking/pools/popup-icons/signature-icon.svg" alt="" />
                                                                                </div>
                                                                            </li>
                                                                            <li className='list-inline-item'>
                                                                                <ul>
                                                                                    <li className='tbold bluegrey'><p>Signature</p></li>
                                                                                    <li><p>Sign your transaction</p></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li> <p className='text-justify grey pt-4'>IMPORTANT: if, after this stage, the tranaction is canceled or rejected, your balance will restore within 24 hours.</p></li>
                                                                            <li><button className='btn-common p-3 mt-4 w-100'>Sign</button> </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row ptb20">
                                                                    <div className="col-12">
                                                                        <ul className='list-inline d-flex align-item-center'>
                                                                            <li className='list-inline-item'>
                                                                                <div>
                                                                                    <img src="/opencanvas-assets/DJT-NFT-staking/pools/popup-icons/transaction-fee-icon.svg" alt="" />
                                                                                </div>
                                                                            </li>
                                                                            <li className='list-inline-item'>
                                                                                <ul>
                                                                                    <li className='tbold bluegrey'><p>Transaction Fee</p> </li>
                                                                                    <li><p>Cover the transaction fee</p></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li><button disabled className='btn-common-white p-3 mt-4  w-100'>Pay Fee</button> </li>
                                                                        </ul>
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
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="modal fade" id="exampleModalLong3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-sm-12 p-0" style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "20px", color: "black" }}>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h3 className="white modal-heading  text-center">Claim</h3>
                                                    <div className='pop-content'>

                                                        <ul>
                                                            <li>
                                                                <p className=''>SELECT LOCK TIME</p>
                                                            </li>
                                                            <li>
                                                                <select className='w-100 select-opt' name="No Lock" id="">
                                                                    <option value="No Lock">No Lock</option>
                                                                    <option value="3 Months">3 Months</option>
                                                                    <option value="6 Months">6 Months</option>
                                                                    <option value="1 Year">1 Year</option>
                                                                </select>
                                                            </li>
                                                        </ul>
                                                        <ul className='list-inline mt-4'>
                                                            <li className='list-inline-item'>
                                                                <ul className='bluegrey '>
                                                                    <li><p>Staking Value</p></li>
                                                                    <li><p>3013 Credits</p></li>
                                                                </ul>
                                                            </li>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <li className='list-inline-item'>
                                                                <ul className='bluegrey'>
                                                                    <li><p>Avarage APY</p></li>
                                                                    <li><p>30%</p></li>
                                                                </ul>
                                                            </li>
                                                        </ul>

                                                        <ul className='list-inline btn-div text-center'>
                                                            <li className='list-inline-item'>
                                                                <button className='btn-common-white'>Cancel</button>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                <button className='btn-common'>Claim</button>
                                                            </li>
                                                        </ul>

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
            </section>
        </>
    )
}

export default Stakinginfo
