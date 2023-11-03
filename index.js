import express from "express";
import path from "path";
import {requestTime, logger} from "./middlewares.js";

const __dirname = path.resolve() // as we do not use 'require', but 'import', we create the '__dirname' apart
const PORT = process.env.PORT ?? 3000;
const app = express(); // iniciamos nuestra app

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
// console.log(app.get('views')) // 33:00

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.get('/', (req, res) => {
  res.render('index', {title: 'Main page', active: 'main'})
})

app.get('/features', (req, res) => {
  res.render('features', {title: 'Features page', active: 'features'})
})

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
// });

// app.get("/features", (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'static', 'features.html'));
// });

// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname, 'static', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

