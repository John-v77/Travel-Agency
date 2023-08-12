class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // class functions

  // 1 # filtering
  filter() {
    // get query obj
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);

    // adjust query for <less then> <more then> lte, gte, gt, lt
    // uses regex to patern match and add '$'
    queryStr = queryStr.replace(/\b(gte|lte|gt|lt)\b/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));

    return this;
  }

  // 2 # sorting res
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  // 3 # custom fiels query
  limitFields() {
    console.log(this.queryString.fields, "fields".red);
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");

      console.log(fields, "fields".green);
      this.query = this.query.select(fields);
    } else {
      this.query.select("-__id");
    }
    return this;
  }

  // 4 # pagination
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 20;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
