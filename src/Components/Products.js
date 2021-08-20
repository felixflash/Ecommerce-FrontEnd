import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'



export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
       
        <>                    { /* carousel Section */}
        <section id="caros">
        <div id="caro-carousel " class="carousel slide" data-bs-ride="carousel">
        <button type="button" data-bs-target="#caro-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#caro-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#caro-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  className="caro-image" src="https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/Yoga_720-13IKB/i5-8250U/4zu3_Lenovo_Yoga_720_13IKB.jpg" class="d-block w-50" alt="laptop"/>
      <div class="caro-text">
      <strong><h5>Laptops</h5></strong>
      <hr></hr>
        <p>Quality And affordable Products.</p>
      
      </div>
      
    </div>
    <div class="carousel-item">
      <img className="caro-image" src="https://cdn.shopify.com/s/files/1/0022/6728/3545/products/iPhone_6s_-_Space_Grey_dc89827a-529c-4f2a-8f9a-7d523f8b245b_2000x.png?v=1578414793" class="d-block w-50" alt="phone"/>
      <div class="caro-text">
        <h5>Phones</h5>
        <p>Look no where for the Best.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  className="caro-image" src="https://cdn.vox-cdn.com/thumbor/bRX-3rGxrIJwbIwiKu7EGKCCuhE=/0x0:2000x1126/1200x800/filters:focal(840x403:1160x723)/cdn.vox-cdn.com/uploads/chorus_image/image/63108794/IdeaPad_S540___6.0.png" class="d-block w-50" alt="laptop"/>
      <div class="caro-text">
        <h4>Laptops</h4>
        <em><h4>It's all About You.</h4></em>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#caro-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#caro-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


</section>

<br></br>
       

{ /* Product Section */}
        
            <div className='products-container bg-light'>
                {products.length === 0 && <div>Loading..</div>}
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
    <p><h5> 2021 </h5></p>
  </p>
    
   
  </div>
</footer>

            
        </>
    )
}
