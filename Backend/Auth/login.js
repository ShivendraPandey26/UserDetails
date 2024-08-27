import UserModel from "../models/UserModel.js";

const authrouter = async (username, password, done) => {
    try {
        console.log("Received request", username, password);

        // Find the user by username
        const user = await UserModel.findOne({ userName: username });
        if (!user) {
            return done(null, false, { message: "Invalid username" });
        }

        // Check if the password is correct (plaintext comparison)
        const isPasswordMatch = (user.password === password);
        if (!isPasswordMatch) {
            return done(null, false, { message: "Invalid password" });
        }

        // If everything is ok, return the user
        return done(null, user);
    } catch (error) {
        return done(error);
    }
};

export default authrouter;
