module.exports = function(db,app,ObjectID){
    app.post('/api/getitem',function(req,res){
        if (!req.body) {
            return res.sendStatus(400)
        }
        productID = req.body.productid;
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.find({_id:objectid}).limit(1).toArray((err,docs)=>{
            console.log(docs);
                res.send(docs);
            })
        })
    }