Product.find({ 
    category: "Electronics", 
    price: { $gt: 500 } 
})
.sort({ price: -1 })
.exec((err, products) => {
    if (err) {
        console.error("Error fetching products:", err);
    } else {
        console.log("Products found:", products);
    }
});
