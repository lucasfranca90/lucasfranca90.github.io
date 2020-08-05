db.movies.find({
    category: {
        $all: ["action"]
    },
    imdbRating: {$gte: 7}
  }
);