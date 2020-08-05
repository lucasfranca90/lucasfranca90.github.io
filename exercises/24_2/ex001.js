db.movies.updateOne({
    title: "Batman"},
    {
        $push: {
            category: "fantasy"
        }
    }
);
    
    //Tem duas formas de fazer esse exercício.
    
// db.movies.updateOne({
//     title: "Batman"},
//     {
//         $set: {
//             "category.2": "superhero"
//         }
//     }
// );