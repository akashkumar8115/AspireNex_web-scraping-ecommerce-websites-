import React from 'react'
import "../css/CardItem.css"
const CardItem = ({ productDatar }) => {
    // console.log(productDatar.title)
    return (
        <>
            <main role="main">
                <div className="product">
                    <div className="img-item-front">
                        <div className="altImges">
                            <ol className='orderlist'>
                                {productDatar.Imgs.map((el, index) => (
                                    <li key={index}>
                                        <img src={el} alt="NA" />
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div>
                            <figure>
                                <img src={productDatar.imgSrc}
                                    alt="Product Image" className="product-image" />
                            </figure></div>

                    </div>
                    <div className="product-description">

                        <div className="info">
                            <h3>{productDatar.title}</h3>
                            <p>Rating: <span><i className="a-icon a-icon-star"><span className="a-icon-alt">
                                <b> {productDatar.rating}★</b>
                            </span></i></span></p>


                        </div>

                        <div className="price">
                            ₹ {productDatar.price}
                        </div>
                        <hr />
                        {productDatar.features && productDatar.features.length > 0 ? (<div className="detail">
                            <ul className="a-unordered-list a-vertical a-spacing-mini">
                                <h3 className="a-size-base-plus a-text-bold"> <b>About this item</b> </h3>
                                {
                                    productDatar.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))
                                }

                            </ul>
                        </div>) : (<p>No About this item available</p>)}
                        <hr />
                        {productDatar.description && productDatar.description.length > 0 ? (<div> <h2>Product description :</h2>
                            <p>
                                {productDatar.description}
                            </p>
                        </div>) : (<p>No description available</p>)}
                        <hr />
                        <div>
                            <h2>Technical Data</h2>
                            {productDatar.technicalData && productDatar.technicalData.length > 0 ? (<table>
                                <tbody>
                                    {productDatar.technicalData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.key}</td>
                                            <td>{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>) : (<p>No technicalData available</p>)}
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
                                <a href="#" className="color black"></a>
                                <a href="#" className="color white"></a>
                                <a href="#" className="color red"></a>
                            </span>
                        </button>
                    </div>
                </div>
            </main>

        </>
    )
}

export default CardItem