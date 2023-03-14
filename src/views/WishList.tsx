import React from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import Banner from '../components/Banner';
import { productsTest } from './VirtualData';
import AddToCart from '../components/AddToCart';

const WishList = () => {

  return (
    <>
        <Header />
        <Banner page='Wishlist' path={['Home', 'Wishlist']} />
        <div className="wishlist-view my-5 px-5">
            <div className="table-responsive">
                <table className="table table-default text-center table-bordered">
                    <thead>
                        <tr className='fd-bg-primary text-white'>
                            <th scope="col" className='p-3'>IMAGE</th>
                            <th scope="col" className='p-3'>PRODUCT NAME</th>
                            <th scope="col" className='p-3'>PRICE</th>
                            <th scope="col" className='p-3'>STOCK STATUS</th>
                            <th scope="col" className='p-3'>ADD TO CART</th>
                            <th scope="col" className='p-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsTest.map(product => {
                                return (
                                    <tr className="p-3" key={product.name}>
                                        <td scope="row w-25"><img src={product.img} alt={product.name} style={{width : '50px', height : '50px'}}/></td>
                                        <td className='fw-bold'>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{"In Stock"}</td>
                                        <td><AddToCart product={product} classSup='w-50 mx-auto'/></td>
                                        <td className='fw-bold cursor-pointer'><i className="bi bi-x" style={{lineHeight: '50px'}}></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
        <Footer />
    </>
  )
}

export default WishList