const Product = require('../../../models/Product')
const config = require('../../../config/default')
const cloudinary = require('cloudinary').v2;
const path = require('path');          

cloudinary.config({ 
  cloud_name: config.cloud_name, 
  api_key: config.api_key, 
  api_secret: config.api_secret 
})

async function addProduct(req, res){
    try {
        const {productName, price, description, reviews, rating, category} = req.body
        const imageFile = req.file

         // Upload image to Cloudinary
         const imageResult = await cloudinary.uploader.upload(imageFile.path, {
            folder: 'product-images',
            use_filename: true, // Use the original filename
            unique_filename: true // Ensure unique filenames
        });

        const product = await new Product({
            productName, price, description, reviews, rating, image:imageResult.url, category
        })
        await product.save()
        return res.status(201).json({message: "Product Added Successfully", success: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal Server Error", success: false})
    }
}

module.exports = addProduct