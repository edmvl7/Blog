const User = require('../models/User')
const bcrypt = require('bcrypt');
const { errorHandler } = require('../utils/error.js');
const jwt = require('jsonwebtoken');



const register = async (req, res, next) => {
    const {username, email, password} = req.body;

    if (
        !username || !email || !password || username === '' || email === '' || password === '' ) {
      return next(errorHandler(400, "Field entry is required."));
    }

    const salt=await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const newUser = User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json("Success")
    } 
    catch (error) {
        next(error);
    }

};


const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
       return next(errorHandler(400, "Field entry is required."))
    }
    try {
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return next(errorHandler(404, 'User not found'));
        }
        const matchPw = bcrypt.compareSync(password, userExist.password);
        if (!matchPw){
            return next(errorHandler(400, 'Incorrect password'))
        }
        const token = jwt.sign(
            { id: userExist._id, isAdmin: userExist.isAdmin },
            process.env.SECRET_TOKEN
        );

        const { password: pass, ...rest } = userExist._doc;

        res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);

    }
    catch (error) {
        next(error);
    }
}


module.exports = {register, login};