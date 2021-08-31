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

            { /* Card  Section */}

            <div class="card-group">
  <div class="card">
    <img src="https://www.sonyalpharumors.com/wp-content/uploads/2018/12/ebay.jpg"  class="card-img-top" alt="card"/>
    <div class="card-body">
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
 

{ /* Review Section */}
<div class="card bg-dark mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://images.thestar.com/j7gUcGlSk9Vr-_yvp1GfCduUFZA=/1086x842/smart/filters:cb(1591360136680)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2020/06/02/for-black-people-calling-the-police-can-be-dangerous-its-time-we-had-another-option/angelyn_francis_2.jpg" class="img-fluid rounded" alt="card"/>
    </div>
    <div class="col-md-8">
      <div class="card-body text-light">
        <h5 class="card-title text-warning">Customer Reviews</h5>
        <hr></hr>
        <p class="card-text">This is the best online platform I have ever been to.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<div class="card bg-dark mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.gannett-cdn.com/-mm-/2f927176fc1e8e0a31a6f6117d6cbdf9b1e47589/c=348-61-1367-637/local/-/media/2015/09/18/USATODAY/USATODAY/635781741516984466-Luckie.jpg?auto=webp&format=pjpg&width=1200" class="img-fluid rounded" alt="card"/>
    </div>
    <div class="col-md-8">
      <div class="card-body text-light">
        
        <h5 class="card-title text-warning ">Customer Reviews</h5>
        <hr></hr>
        <p class="card-text">I'm so happy and satisfied with the products here .</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

                                     { /* Footer Section */}

            <footer class="footer">
              <hr></hr>
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span className="text-warning"> About Us</span> We are committed to helping people get whatever they want and be satisfied with it.
    </p>
    <div class="icons">
      <a href="https://web.facebook.com/profile.php?id=100072122181777&_rdc=1&_rdr"><i class="fa fa-facebook"></i></a>
      <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
      
      <a href="https://www.instagram.com/isellapp/"><i class="fa fa-instagram"></i></a>
      
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p ><span className="text-warning"> Knust</span> KSI-GHANA</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p className="text-warning"> (+233) 240 286 066</p>
    </div>
  
  </div>


  <div class="footer-right col-md-4 col-sm-6">
    <p class="menu">
    <br></br>
    <br></br>
    <button type="button" class="btn btn-danger">
 2021 <span class="badge bg-primary">TM</span>
</button>
  </p>
  

 
  </div>
</footer>

            
        </>
    )
}
