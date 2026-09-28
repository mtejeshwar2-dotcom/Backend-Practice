import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = export()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(cookieParser())
// app.use() is configuration











export { app }