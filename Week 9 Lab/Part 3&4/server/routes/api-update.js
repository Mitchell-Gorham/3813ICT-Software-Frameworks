module.exports = function(db,app,ObjectID) {
    var result;
    app.post('/appupdate',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        var objectID = new ObjectID(product.objid);
        const collection = db.collection('products');
        collection.updateOne({_id:objectID},{$set:{name:product.name, description:product_description, price:product.price, units:product.units}},()=>{
            res.send({'ok':product.objid});
        })
    });
}