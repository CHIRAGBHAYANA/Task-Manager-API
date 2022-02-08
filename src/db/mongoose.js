const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const me = new User({
//   name: "Chirag Bhayana",
//   age: 27,
//   email: "chiragbhayana2k@gmail.com",
//   password: "123456",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const task = new tasks({
//   description: "Complete the Github Course",
// });

// task
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
