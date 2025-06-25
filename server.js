// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// 데이터 저장용 변수
let data = { message: "여러분 화이팅!" };

// CORS 설정
app.use(
  cors({
    origin: "http://127.0.0.1:9000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// JSON 바디 파싱 미들웨어
app.use(express.json());
app.use(express.text());

// GET 요청 처리
app.get("/", (req, res) => {
  res.status(200).json(data);
});

// POST 요청 처리
app.post("/", (req, res) => {
  data.message = req.body;
  res.status(200).send(`받은 POST 데이터: ${req.body}`);
});

// PUT 요청 처리
app.put("/", (req, res) => {
  data.message = req.body;
  res.status(200).send(`업데이트된 데이터: ${req.body}`);
});

// DELETE 요청 처리
app.delete("/", (req, res) => {
  data = {};
  res.status(200).send("데이터가 삭제되었습니다.");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
