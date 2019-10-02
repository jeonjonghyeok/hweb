import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import searchRouter from "./routers/searchRouter";

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

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/search",searchRouter);

export default app;