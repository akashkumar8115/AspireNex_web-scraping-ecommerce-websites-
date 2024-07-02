import React, { useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import "../css/CardItem.css"
import "../css/ProductInput.css"

function App() {
    const [url, setUrl] = useState('');
    const [urlr, setUrlr] = useState('');
    const [productData, setProductData] = useState(null);
    const [productDatar, setProductDatar] = useState(null);
    const [loading, setLoading] = useState(true);

    function clickButtonLeft() {
        const mainString = url;
        const substring = 'amazon';

        const containsSubstring = mainString.includes(substring);
        console.log(containsSubstring)

        if (containsSubstring) {
            amazonproductleft()

        }
        else {
            flipcartproductleft()

        }
    }

    function clickButtonRight() {
        const mainString = urlr;
        const regex = 'amazon';

        const containsSubstring = mainString.includes(regex);
        console.log(containsSubstring)
        if (containsSubstring) {
            amazonproductright()
        }
        else {
            flipcartproductright()

        }
    }




    const amazonproductleft = async () => {
        try {
            const response = await axios.post('https://aspirenex-backend.onrender.com/amazon/product/left', { url });
            setProductData(response.data);
            console.log('Response data:', productData);
            setLoading(false);


        } catch (error) {
            console.error('Error fetching product data:', error);
            setLoading(false);

        }
        // console.log('Product data state:', productData);
        console.log('Current URL state:', url);

    };

    // title, imgSrc, price, description, Imgs, rating, features, technicalData

    const flipcartproductleft = async () => {
        try {
            const response = await axios.post('https://qg2m99-5000.csb.app/flipcart/product/left', { url });
            setProductData(response.data);
            console.log('Response data:', productData);
            setLoading(false);


        } catch (error) {
            console.error('Error fetching product data:', error);
            setLoading(false);

        }
        // console.log('Product data state:', productData);  
        console.log('Current URL state:', url);

    };

    const amazonproductright = async () => {
        try {
            const response = await axios.post('https://qg2m99-5000.csb.app/amazon/product/right', { urlr });
            setProductDatar(response.data);
            // console.log('Response data:', response.data);
            console.log(productDatar)

        } catch (error) {
            console.error('Error fetching product data:', error);

        }
        // console.log('Product data state:', productDatar);  
        console.log('Current URL state:', urlr);
    }

    const flipcartproductright = async () => {
        try {
            const response = await axios.post('https://qg2m99-5000.csb.app/flipcart/product/right', { urlr });
            setProductDatar(response.data);
            // console.log('Response data:', response.data);
            console.log(productDatar)

        } catch (error) {
            console.error('Error fetching product data:', error);

        }
        console.log('Product data state:', productDatar);
        console.log('Current URL state:', urlr);
    }


    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1> Amazon/flipkart Product Summary</h1>
                    <div className="fetchdata">
                        <div className="leftsearch">
                            <div className="fancy">
                                <input
                                    type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="Enter amazon/flipkart product URL"
                                />
                            </div>
                            <button className='custom-btn btn-2' onClick={clickButtonLeft}>Left Product</button>
                        </div>
                        <div className="rightsearch">
                            <div className="fancy">
                                <input
                                    type="text"
                                    value={urlr}
                                    onChange={(e) => setUrlr(e.target.value)}
                                    placeholder="Enter amazon/flipkart product URL"
                                />
                            </div>
                            <button className='custom-btn btn-2' onClick={clickButtonRight}>Right Product</button>
                        </div>
                    </div>

                    <div className="item-list">

                        {productData ? (
                            <div className="product-summary">

                                <main role="main">
                                    <div className="product">
                                        <div className="img-item-front">
                                            <div className="altImges">
                                                <ol className='orderlist'>
                                                    {productData.Imgs.map((el, index) => (
                                                        <li key={index}>
                                                            <img src={el} alt="NA" />
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                            <div>
                                                <figure>
                                                    <a href={url} target="_blank" rel="noopener noreferrer"> <img src={productData.imgSrc}
                                                        alt="Product Image" className="product-image" /></a>
                                                </figure></div>

                                        </div>
                                        <div className="product-description">

                                            <div className="info">
                                                <h3>{productData.title}</h3>
                                                <p>Rating: <span><i className="a-icon a-icon-star"><span className="a-icon-alt">
                                                    <b> {productData.rating} ★</b>

                                                </span></i></span></p>


                                            </div>

                                            <div className="price">
                                                ₹ {productData.price}
                                            </div>
                                            <hr />
                                            <div className="detail">
                                                <ul className="a-unordered-list a-vertical a-spacing-mini">
                                                    <h3 className="a-size-base-plus a-text-bold"> <b>About this item</b> </h3>

                                                    {productData.features ?
                                                        (productData.features.map((feature, index) => (
                                                            <li key={index}>{feature}</li>
                                                        ))) : (<p>No features available</p>)
                                                    }


                                                </ul>
                                            </div>
                                            <hr />
                                            <div> <h2>Product description :</h2>
                                                <p>{productData.description ?
                                                    (productData.description) : (<p>No description available</p>)}
                                                </p>
                                            </div>
                                            <hr />
                                            <div>
                                                <h2>Technical Data</h2>
                                                <table>
                                                    <tbody>
                                                        {productData.technicalData ? (productData.technicalData.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{item.key}</td>
                                                                <td>{item.value}</td>
                                                            </tr>
                                                        ))) : (<p>No technicalData available</p>)}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="product-sidebar">
                                            <button className="buy">
                                                <span>BUY ITEM</span>
                                            </button>

                                            <button className="info">
                                                <span>MORE INFO</span>
                                            </button>

                                            <button className="size">
                                                <span>SIZES</span>
                                            </button>

                                            <button className="colors">
                                                <span>
                                                    <a href="" className="color black"></a>
                                                    <a href="" className="color white"></a>
                                                    <a href="" className="color red"></a>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </main>

                                {/* <CardItem productData={productData} /> */}
                            </div>
                        ) : (
                            <div className="loading" id='loading'>
                                <div className="lds-roller">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>)}

                        {productDatar ? (
                            <div className="product-summary">
                                <CardItem productDatar={productDatar} />
                            </div>
                        ) : (
                            <div className="loading" id='loading'>
                                <div className="lds-roller">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )}


                    </div>

                </header>
            </div>
        </>
    );
}

export default App;
