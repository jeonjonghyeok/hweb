import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./router";

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine','html');
app.engine('html',require('ejs').renderFile);
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev")); //어떤 종류의 접속인지 console창에보여줌 common,dev,tiny등등

const handleHome = (req,res) => res.render("index.html");
const handleLogin = (req,res) => res.render("login.html");
const handleSignin = (req,res) => res.render("signin.html");
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/signin", handleSignin);

export default app;