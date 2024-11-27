const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const { postMarkdown } = require('./controllers/mardown-controller')


// app.use("/api", require("./routes/mardownRoute"));

app.post("/api/markdown", postMarkdown);

const PORT = process.env.PORT || 3008;

app.get("/", (req, res) => {
  res.send("running");
});

app.get('/health-check', (req,res)=>{
    try {

        const upTimeConvert = (seconds) => {
            const hours = Math.floor(seconds/ (60*60));
            const minutes = Math.floor((seconds % (60*60))/ 60);
            seconds = Math.floor(seconds % 60);
            const time = hours + ':' + minutes + ':' + seconds;
            return time;
        }
        const healthcheck = {
            uptime: upTimeConvert(+process.uptime()),
            message: "OK",
            timestamp: Date.now(),
        }
        return res.status(200).json(healthcheck)
    } catch (error) {
        console.log(err);
    }
})

const server = app.listen(PORT, () => {
  console.log(`app running at ${PORT}`);
});

// show only error after crash
process.on("unhandledRejection", (err) => {
  console.log(err);
  server.close(() => process.exit(1));
});
