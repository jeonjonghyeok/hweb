import app from "./app";

const PORT = 4010;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT,handleListening);