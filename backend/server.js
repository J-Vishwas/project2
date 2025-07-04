require("dotenv").config();


const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB =require("./config/db")
const app = express();
const { protect } = require('./middlewares/authMiddleware');
const {generateConceptExplanation,generateInterviewQuestions} = require('./controllers/aiController')
// Middleware to handle CORS
// app.use(
//   cors({
//      origin: [ "https://project2-two-ashen.vercel.app/","*"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://project2-two-ashen.vercel.app/', // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Preflight requests support
app.options('*', cors());

connectDB()
// Middleware
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions",sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));