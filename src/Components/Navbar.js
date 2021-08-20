import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'


export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return ( 
        
                
        <div className=' navbar navbar-expand-lg navbar-dark bg-dark text-light navbox'>  { /* Navbar Section  */}
           <div class="container-fluid">
           <a class="navbar-brand " href="/">
           <img className="imgclass " src="https://image.flaticon.com/icons/png/512/4290/4290854.png" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
                 <div className="  badge float-right m-2 bg-light text-wrap text-dark text-right">
                 <h5> I-Sell </h5>
                 </div>

            </a>
            
            
            {!user && <div className='rightside'>   { /* Navbar  Right Hand Section  */}
            <span><badge to="addproducts" className=' badge-pill navlink btn-primary'> Add Products</badge></span>
            
                <span><badge to="signup" className=' badge-pill navlink btn-primary'>Sign Up</badge></span>
                <span><badge to="login" className=' badge-pill navlink btn-primary'>Login</badge></span>
                
            </div>}
            {user && <div className='rightside'>
                <div className="addproducts">
                   
          <span><Link to="addproducts" className='navlink'>Add Products</Link></span>
                </div>
                
                <div className="user">
                <span><Link to="/" className='navlink'>{user}</Link></span>
                </div>
              
                <div className="carticon">
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
            
                <div className="cartvalue">
                <span className='no-of-products'>{totalQty}</span>
                </div>
                </div>
                <span><button className='logout-btn  btn-md btn-primary' onClick={handleLogout}>Logout</button></span>
            </div>
            }
            </div>
                
           
        </div>
    )
}
