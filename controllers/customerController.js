const Customer = require("../models/addCustomer");
var moment = require("moment"); 


const customer_views_post = (req, res) => {
  const newUser = new User(req.body);

  console.log(req.body);
  res.sendFile("/views/succes.html", { root: __dirname });

  newUser    
    .save()
    .then(() => {
      console.log("User saved to database");
    })
    .catch(() => {
      console.log("Error saving user to database");
    });
};

const customer_index_get = (req, res) => {
  Customer.find()
    .then((result) => {
      res.render("index", { data: result, moment: moment });
    })
    .catch((err) => {
      console.log(`operation failed due ${err}`);
    });
};

const customer_view_get = (req, res) => {
  Customer.find()
    .then((result) => {
      res.render("view", { data: result, moment: moment });
    })
    .catch((err) => {
      console.log(`operation failed due ${err}`);
    });
};

const customer_edit_get = (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      res.render("edit", { result: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const customer_index_put = (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then(() => {
      // redirect to GET route which already passes countries
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to update customer");
    });
};

const customer_search_post = (req, res) => {
  console.log(req.body.searchText);
  const resultOfSearch = req.body.searchText.trim();
  Customer.find({
    $or: [{ firstName: resultOfSearch }, { lastName: resultOfSearch }],
  })
    .then((result) => {
      console.log(result);
      res.render("search", { data: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const customer_view_gett = (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      res.render("view", { data: result, moment: moment });
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const customer_home_delete = (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.redirect("/");
      console.log("deleted customer from database");
      console.log(result);
    })
    .catch((err) => {
      console.log("failed");
    });
};

module.exports = {
  customer_views_post,
  customer_index_get,
  customer_view_get,
  customer_edit_get,
  customer_index_put,
  customer_search_post,
  customer_view_gett,
  customer_home_delete,
};
