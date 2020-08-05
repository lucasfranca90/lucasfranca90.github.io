db.movies.find(
  {
    $and: [
      {
        $or: [
          { ratings: { $size: 4 } },
          { category: { $all: ["adventure", "family"] } },
        ]
      }, { imdbRating: { $gt: 7 } }
    ]
  }
);