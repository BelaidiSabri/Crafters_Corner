const { body, validationResult } = require("express-validator");

const validateEmailAndPassword = async (req, res, next) => {
  let rules = [    body("email").isEmail().withMessage("Please enter a valid email")  ];
  if (req.path === "/register") {
    rules.push(
      body("password")
      .isLength({ min: 8 })
      .withMessage("Password should be at least 8 characters"),
    );
  }

  for (const validationRule of rules) {
    await validationRule.run(req);
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ msg: errorMessages }); // Send error messages as response
  }
  

  next();
};

module.exports ={validateEmailAndPassword}


