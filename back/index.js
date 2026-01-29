// 1. express
// 2. cors
const express = require('express')
const cors = require('cors')

require('dotenv').config();  // .env 환결설정값

const app = express()
app.use(cors()) // 크로스 오리진 설정
app.use(express.json())  // 제이슨 데이터 파싱

// 라우터 불러오기
const getRoutes = require('./routes/getRoutes')

// 3. root 설정
app.get('/', (request, response) => {
  response.send('This iss the Main App form Deployment')
})

// 라우터 미들웨어 등록
app.use('/', getRoutes)

// 4. listen 설정
app.listen(process.env.PORT, () => {
  console.log(`Server is Running in ${process.env.PORT}`)
})
