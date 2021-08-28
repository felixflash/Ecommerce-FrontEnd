import React, { useState } from 'react'
import { storage, db } from '../Config/Config'



export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0)
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (

        <section id="logincontainer">
        <div class="bg-dark p-5 text-dark bg-opacity-25">
        <div className="Addproductbgimg">
    <img src="https://iammagnus.com/wp-content/uploads/2016/05/website-design-background-1.jpg" alt="bacgroundimage"/>
    </div>

        <div className='container bg-dark text-light'>
            <br />
            <img class="mb-4" src="https://image.flaticon.com/icons/png/512/4290/4290854.png" alt="" width="50" height="50" />
            <h2>ADD PRODUCTS</h2>
            < hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                <br />
                <h5><button type="submit" className='badge text-light btn-lg badge-secondary badge-pill'><i class="fa fa-check-circle-o  fa-spin fa-1x fa-fw text-warning" ></i>  ADD</button></h5>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
        </div>
        </section>
    )
}
