db.movies.updateOne({
    title: "Home Alone"},
    {$set: {
        budget: 2,
        imdbRating: 5.5
    }}
)