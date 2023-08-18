const Product = require('../../../models/Product')

async function searchProduct(req, res){
    try {
        const searchTerm = req.query.q; // Search term from query parameter
        const regex = new RegExp(searchTerm, 'i'); // Case-insensitive regex

        const products = await Product.find({
            $or: [
                { productName: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
            ]
        });

        return res.status(200).json({success:true, products});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' , success:false});
    }
}

module.exports = searchProduct