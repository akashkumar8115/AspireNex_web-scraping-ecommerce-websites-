import React, { useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import "../css/CardItem.css"

function App() {
    const [url, setUrl] = useState('');
    const [productData, setProductData] = useState(null);

    const fetchProductData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/fetch-product', { url });
            setProductData(response.data);
            console.log('Response data:', response.data); 
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
        console.log('Product data state:', productData);  
        console.log('Current URL state:', url);  
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Product Summary</h1>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter product URL"
                />
                <button onClick={fetchProductData}>Fetch Product Data</button>

                {productData && (
                    <div className="product-summary">

                        <main role="main">
                            <div className="product">
                                <figure>
                                    <img src={productData.imgSrc}
                                        alt="Product Image" className="product-image" />
                                </figure>

                                <div className="product-description">

                                    <div className="info">
                                        <p>{productData.title}</p>
                                        <p>{productData.description}
                                        </p>
                                    </div>

                                    <div className="price">
                                        {productData.price}
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
                )}
            </header>
        </div>
    );
}

export default App;