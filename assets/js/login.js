router.get("/login", function(req, res, next) {
  if (req.session.logined) res.render("logout", { session: req.session });
  else {
    res.render("login", { session: req.session });
  }
});
router.post("/login", function(req, res, next) {
  if (req.body.id == "bbq" && req.body.pw == "zxcvasdf123")
    req.session.regenerate(function() {
      req.session.logined = true;
      req.session.user_id = req.body.id;

      res.render("logout", { session: req.session });
    });
});

router.post("/logout", function(req, res, next) {
  req.session.destroy();
  res.redirect("/login");
});
