const express= require("express");

const app= express();

const RMiddleware= (req ,res) =>{
    console.log("Request received at URL",req.url, "at", new Date());

}
app.use(RMiddleware);


const products=[
    {
        productId:1,
        name: "Car"
    },
    {
        productId:2,
        name: "Mobile"
    },
    {
        productId:3,
        name: "T-shirt"
    },
]
https: app.get("/api/v1/get-products/:productId",(req,res)=>{
    console.log(req.query);
    const product= products.find((product) => product.id == req.query.productId);
    console.log(product)
    if (product){
        res.json({
            success:true,
            data: product,
        });
        return;

    }
    res.json({
        success: true,
        message: "Dummy Get Products API",
        data: products,
    });
});
app.listen(8080, ()=>
    console.log("Express server is up and running on port 8080")
);