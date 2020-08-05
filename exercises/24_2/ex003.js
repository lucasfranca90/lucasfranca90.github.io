db.movies.updateOne({
    title: "Batman"},
    {$pull: {
        category: {$in: [
            "fantasy",
            "action"
        ]}}
    }
);