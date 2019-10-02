import routes from "../router";

export const home = (req,res) => res.render("index.html");
export const getSignin = (req,res) => {
    res.render("signin.html");
}
export const postSignin = (req,res) => {
    const {
        body: {id,password,password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("signin.html");
    } else{
        res.redirect(routes.home)
    }
    
}
export const getLogin = (req,res) => {
    res.render("login.html");
}
export const postLogin = (req,res) => {
    res.redirect(routes.home);
}
export const logout = (req,res) => res.render("logout.html");