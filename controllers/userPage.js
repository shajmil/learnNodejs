exports.userHome = (req, res) => {
  res.render("users/home");
};

exports.userAbout = (req, res) => {
  res.end("<h1>Hello from user about</h1>");
};
