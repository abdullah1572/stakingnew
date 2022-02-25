import './staking.scss'
import logo from '../../../Assets/bnb-icon.svg'
import logo2 from '../../../Assets/rtt-icon.svg'
import logo3 from '../../../Assets/nft-icon.svg'
import { Link } from 'react-router-dom'

function Staking() {
    return (
        <>
            <section className='main-staking ptb'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 px-2">
                            <div class="card main-staking-card" style={{ fontFamily: "Ink Free, Times, serif" }}>
                                <div className='staking-card-imgBg-div'>
                                    <h2>Earn BNB</h2>
                                    <img src={logo} alt="" />
                                </div>
                                <div className="card-body">
                                    <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center' style={{ fontFamily: "Ink Free, Times, serif", fontWeight: "bolder", fontSize: "20px", color: "white" }}>
                                        <li className='list-inline-item'><p>Average Apy</p></li>
                                        <li className='list-inline-item'><p>54%</p></li>
                                    </ul>
                                    <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                        <li className='list-inline-item'><p>Total earning</p></li>
                                        <li className='list-inline-item'><p>≈ $150</p></li>
                                    </ul>
                                    <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                        <li className='list-inline-item'><p>Staked</p></li>
                                        <li className='list-inline-item'><p>≈ $150</p></li>
                                    </ul>
                                    <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                        <li className='list-inline-item'><p>Lock Time</p></li>
                                        <li className='list-inline-item'><p>3 Months</p></li>
                                    </ul>
                                    <Link to='/unlinked'> <button className='btn-common p-3 mt-3 w-100'>Start Staking</button></Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 px-2">
                            <div class="card main-staking-card">
                                <div className='staking-card-imgBg-div staking-card-imgBg-div2'>
                                    <h4>Earn BNB</h4>
                                    <img src={logo2} alt="" />
                                </div>
                                <div class="card-body">
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Average Apy</p></li>
                                       <li className='list-inline-item'><p>54%</p></li>
                                   </ul>
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Total earning</p></li>
                                       <li className='list-inline-item'><p>≈ $150</p></li>
                                   </ul>
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Staked</p></li>
                                       <li className='list-inline-item'><p>≈ $150</p></li>
                                   </ul>
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Lock Time</p></li>
                                       <li className='list-inline-item'><p>3 Months</p></li>
                                   </ul>
                                   <Link to='/UnstakedNfts'>   <button className='btn-common p-3 mt-3 w-100'>Start Staking</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2">
                            <div class="card main-staking-card">
                                <div className='staking-card-imgBg-div staking-card-imgBg-div3'>
                                    <h4>Earn BNB</h4>
                                    <img src={logo3} alt="" />
                                </div>
                                <div class="card-body">
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Average Apy</p></li>
                                       <li className='list-inline-item'><p>54%</p></li>
                                   </ul>
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Total earning</p></li>
                                       <li className='list-inline-item'><p>≈ $150</p></li>
                                   </ul>
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Staked</p></li>
                                       <li className='list-inline-item'><p>≈ $150</p></li>
                                   </ul>
                                   <ul className='list-inline d-flex mt-2 bluegrey justify-content-between align-items-center'>
                                       <li className='list-inline-item'><p>Lock Time</p></li>
                                       <li className='list-inline-item'><p>3 Months</p></li>
                                   </ul>
                                   <Link to='/Stakednft'>    <button className='btn-common btn-staked p-3 mt-3 w-100'>Staked</button></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Staking
