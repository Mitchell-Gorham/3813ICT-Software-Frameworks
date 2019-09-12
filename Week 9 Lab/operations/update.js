exports.updateDocument = function(collection, queryJSON, updateJSON, callback) {
    // Get the documents collection
    collection.updateOne(queryJSON, { $set: updateJSON }, function(err, result) {
        console.log("for the documents with");
        console.log(queryJSON);
        console.log("SET: ");
        console.log(updateJSON);
        callback(result);
    });
}