import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import CarouselContainer from './CarouselContainer'



export const Products = () => {
  
  const { dispatch } = useContext(CartContext);
    const { products } = useContext(ProductsContext);
   
    

    return (
       
        <>                   
        <div class="card text-center">   { /* Featured Section */}
  <div class="card-body">
    <h5 class="card-title">The Best Online Shop at the Moment</h5>
    <a href="#ProductsSection" class="btn btn-primary">Featured Products</a>
  </div>
  
</div>

        <CarouselContainer />    { /* carousel Section */}
       
   
        { /* Products Section */}

        <div class="card text-center">
  <div class="card-body bg-secondary">
    <h5 class="card-title text-light">Start Shopping Now with Us</h5>
    <a href="#ProductsSection" class="btn btn-primary"> Products Section</a>
  </div>
  
</div>




{ /* Product Section */}
        <section id = "ProductsSection">
          
        
            <div className='products-container bg-light'>
                {products.length === 0 && <div><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span></div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                        <h6>{product.ProductName}</h6>
                        </div>
                        <div className='product-price'>
                        <h6>GH₵ {product.ProductPrice}.00</h6>
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>

            </section>



                                     { /* Footer Section */}
            <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About Us</span> We are committed to helping people get whatever they want and be satisfied with it.
    </p>
    <div class="icons">
      <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
      <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
      
      <a href="www.instagram.com"><i class="fa fa-instagram"></i></a>
      
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> KNUST</span> KUMASI,GHANA</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+233) 240 286 066</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="www.gmail.com"> Help by emailing us</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <p class="menu">
    <img className="img-footer " src="https://image.flaticon.com/icons/png/512/4290/4290854.png" alt="" width="100" height="100" class="d-inline-block align-text-top"/>
    
    <br></br>
    <br></br>
    <br></br>
    <p><h5> © 2021 </h5></p>
  </p>
    
   
  </div>
</footer>

            
        </>
    )
}
