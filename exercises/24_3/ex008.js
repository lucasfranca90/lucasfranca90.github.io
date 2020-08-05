db.movies.find({
    ratings: {
        $elemMatch: {
            $gt: 64, $lt: 105, $mod: [9, 0]
        }}
    },
    {
        _id: 0,
        title: 1, 
        ratings: 1
    }
);