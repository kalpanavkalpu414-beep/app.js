
const validate = (req, res, next) => {
    const { email, name, username, gender, mobile, address, password } = req.body;

    if (!email || !name || !username || !gender ||
        !mobile || !address || !password) {
        return res.send("All fields are required");
    }

    if (password.length < 6) {
        return res.send("Password must contain 6 characters");
    }

    next();
};

module.exports = validate;