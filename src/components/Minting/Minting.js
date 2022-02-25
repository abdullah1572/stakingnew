import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import '../Minting/minting.scss'
import img1 from '../../Assets/Loot/article23-1.jpeg'
import img2 from '../../Assets/Loot/Metaverso_746x419.jpeg'
import img3 from '../../Assets/Loot/care1.webp'
import img4 from '../../Assets/Loot/decentraland_cover_Twitter_large_1637063730543.webp'

// import axios from 'axios'
// import Web3 from 'web3'
// import { MintNft } from "../services/service";
// import { contractAddress, abi } from '../utills/constant'

const Mintingn = () => {

    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                // stagePadding: -100,
                margin: 15,
            },
            361: {
                items: 1,
                // stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 1,
                // stagePadding: -100,
                margin: 15,
            },
            768: {
                items: 2,
                // stagePadding: -100,
                margin: 30,
            },
            1024: {
                items: 3,
                // stagePadding: -100,
                margin: 30,
            },
            1199: {
                items: 3,
                // stagePadding: -100,
                margin: 30,
            },
            1366: {
                items: 4,
                // stagePadding: -100,
                // padding: 20, 
                margin: 30,
            }
        },
    };

    // let accountAd;
    // const [value, setValue] = useState("")
    // const [account, setAccount] = useState("Connect Wallet");
    // const [button, setButton] = useState("Bet Now!")
    // const [buttonState, setButtonState] = useState(false)
    // const [cards, setCards] = useState()
    // const [comp, setComp] = useState(true)
    // const [cardData, setCardData] = useState()
    // const [withDraw, setWithDraw] = useState("Withdraw")
    // const [mybalance, setMybalance] = useState("")
    // const [cardList, setCardList] = useState([])
    // const [total, setTotal] = useState()
    // const [compWithdraw, setCompWithdraw] = useState(true)
    // const [checkOut, setCheckOut] = useState(true)
    // const [withDrawButton, setWithDrawButton] = useState("Checkout")
    // const [cardImage, setCardImage] = useState("")
    // const [indexes, setIndexes] = useState([])
    // const [totalMinted, setTotalMinted] = useState()
    // const [price, setPrice] = useState()
    // const [imageUri, setImageUri] = useState()
    // const [imageIndex, setImageIndex] = useState()


    // let accounts;
    // const getAccounts = async () => {
    //     const web3 = window.web3;
    //     try {
    //         accounts = await web3.eth.getAccounts();
    //         return accounts;
    //     } catch (error) {
    //         console.log("Error while fetching acounts: ", error);
    //         return null;
    //     }
    // };
    // const loadWeb3 = async () => {
    //     let isConnected = false;
    //     const web3 = window.web3;
    //     try {
    //         if (window.ethereum) {
    //             window.web3 = new Web3(window.ethereum);
    //             await window.ethereum.enable();
    //             isConnected = true;
    //         } else if (window.web3) {
    //             window.web3 = new Web3(window.web3.currentProvider);
    //             isConnected = true;
    //         } else {
    //             isConnected = false;
    //             console.log("Metamask is not installed, please install it on your browser to connect.");
    //         }
    //         if (isConnected === true) {
    //             let accounts = await getAccounts();
    //             accountAd = accounts[0];
    //             setAccount(accountAd);
    //             getValues();
    //             // balanceOf()
    //         }
    //         // imgFun();
    //     } catch (error) {
    //         console.log("Error while connecting metamask", error);
    //     }
    // };

    // const getValues = async (accountAd) => {
    //     try {
    //         const web3 = window.web3;
    //         let contract = new web3.eth.Contract(abi, contractAddress);
    //         const card = await contract.methods.price().call();
    //         console.log("card", card);
    //         setPrice(card);
    //         // setCards(card[1])

    //         const totalminted = await contract.methods.price().call();
    //         setTotalMinted(totalminted);
    //         // console.log(card[1])
    //         // console.log(card[1])
    //     } catch (error) {
    //         console.log("Error while fetching acounts: ", error);

    //     }
    // }
    // const mint = async () => {
    //     MintNft(account);
    // }

    // const onChangeHandle = async (e) => {
    //     setImageIndex(e.target.value)
    // }
    // const getNft = async () => {
    //     try {
    //         const web3 = window.web3;
    //         let contract = new web3.eth.Contract(abi, contractAddress);
    //         const card = await contract.methods.tokenURI(imageIndex).call();
    //         console.log("imageIndex:", card);
    //         const addUser = await axios.get(card)
    //             .then((res) => {
    //                 console.log("res", res.data.image);
    //                 // const push = (toast) => 
    //                 setImageUri(res.data.image);
    //                 return res;
    //             }).catch((e) => {
    //                 console.log("err", e)
    //                 return e;
    //             });
    //     } catch (error) {
    //         console.log("Error while fetching acounts: ", error);

    //     }
    // }
    // useEffect(() => {
    //     loadWeb3();
    // }, []);

    return (
        <>
            <div className="djjsdjnds" style={
                {
                    fontFamily: "Ink Free, Times, serif",
                    fontWeight: "bolder",
                    fontSize: "20px",
                    color: "white",
                }
            }>
                <section className="minting">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6 col-12">
                                        <div className="leftside">
                                            <h3>
                                                Metaestate Districts play to earn: Explore, mine, trade and govern.  various gameplays, such as, RPG, management, NFT collection, Battle, Auction, Breed and more
                                            </h3>
                                            <button type="button" style={
                                                {
                                                    fontFamily: "Ink Free, Times, serif",
                                                    fontWeight: "bolder",
                                                    fontSize: "20px",
                                                    color: "white",
                                                }
                                            }>MINT NFTs</button>
                                            <h1 style={
                                                {
                                                    fontFamily: "Ink Free, Times, serif",
                                                    fontWeight: "bolder",
                                                    fontSize: "20px",
                                                    color: "white",
                                                }
                                            }>Currently Minted : 47/20000</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 col-12">
                                        {/* <div className="right-side"> */}
                                        <div className="img_wrapperss shadow-lg">
                                            <img src={img1} alt="" className="img-fluid" />
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="veiwyour">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 m-auto">
                                <div className="row shadow-lg shshd">
                                    <div className='col-lg-6'>
                                        <div className="IMGASS ">
                                            <img src={img2} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="abbnads">
                                            <h3>View Your Minted NFT's</h3>
                                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Token ID Number To See The NFT"
                                            />
                                            <button>GET NFT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="beakss">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 m-auto">
                                <div className="headingss">
                                    <h3>Meta Districts</h3>
                                </div>
                                <div className="first-second ">
                                    <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                        <div className="item">
                                            <div className="card card-width ">
                                                <img src={img3} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\Decentraland_46.jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src={img4} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\images (2).jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\images.jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\images (1).jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Mintingn;
