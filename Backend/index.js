// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");

// const subjective = require("./routes/Subjective");



require("dotenv").config();
// // const main = require("./src/config/db");
// const cors = require("cors");
// app.listen(5000,()=>{
//     console.log("listening on port 5000")
// })

// // --- Main Express 


// app.use(express.json());
// app.use(cookieParser());


// // --- Your Existing API Routes ---
// app.use("/subjective", subjective);


const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const questionsDB = require('./questionsDB'); // Your local question "database"

// --- CONFIGURATION ---
const app = express();
app.use(cors()); // Enable cross-origin requests for development
app.use(express.json()); // Enable parsing of JSON request bodies
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
}));

// --- INITIALIZE GEMINI ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// --- API ROUTES ---

// Endpoint 1: GET questions for a specific class
app.get('/subjective/problemByClass/:classId', (req, res) => {
    try {
        const { classId } = req.params;
        const classData = questionsDB[classId];
        if (!classData) {
            return res.status(404).json({ message: `No questions found for Class ${classId}.` });
        }
        // Transform data to send only id and text
        const responseData = {};
        for (const subject in classData) {
            responseData[subject] = classData[subject].map(({ id, text }) => ({ id, text }));
        }
        res.status(200).json({ success: true, data: responseData });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});


// Endpoint 2: POST user's answer for streaming AI analysis
app.post('/subjective/analyze', async (req, res) => {
    try {
        console.log("Received for analysis:", req.body); // Keep this for debugging
        const { questionId, classId, subject, userAnswer } = req.body;

        if (!questionId || !classId || !subject || !userAnswer) {
            return res.status(400).json({ message: 'Missing required fields in request.' });
        }

        // --- THIS IS THE CORRECTED LOOKUP LOGIC ---
        // Access by class first, then by subject.
        const question = questionsDB[classId]?.[subject]?.find(q => q.id === questionId);

        if (!question) {
            console.error(`Question not found for: class=${classId}, subject=${subject}, id=${questionId}`);
            return res.status(404).json({ message: 'Question data could not be found on the server.' });
        }
        
        // --- PREPARE FOR STREAMING (Server-Sent Events) ---
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        const systemInstruction = `You are a friendly and encouraging AI tutor for students in the Indian CBSE system. Your task is to provide helpful feedback directly to a student on their answer.

**Your Goal:** Help the student understand their mistakes and learn how to improve, without being discouraging.

**Instructions:**
1.  **Address the Student Directly:** Use "you" and "your" throughout the response.
2.  **Maintain a Positive Tone:** Start with an encouraging sentence. Even if the answer is completely wrong, say something like, "Thanks for giving it a try! Let's break this topic down."
3.  **Provide a Score:** Give a score out of 10.
4.  **Analyze the Answer:** Briefly explain what was missed or misunderstood.
5.  **List Improvements:** Provide clear, actionable "Key Areas for Improvement" in a markdown bulleted list, based on the provided key points.
6.  **Keep it concise and clear.** Structure the entire response in markdown for readability.
`;

        const prompt = `
            KEY POINTS TO CHECK FOR:
            - ${question.keyPoints.join("\n- ")}

            QUESTION:
            "${question.text}"
            
            STUDENT'S ANSWER:
            "${userAnswer}"
        `;
        
        // --- CALL GEMINI AND STREAM THE RESPONSE ---
        const result = await model.generateContentStream({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
        });

        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);
        }

        res.end();

    } catch (error) {
        console.error("Gemini stream error:", error);
        res.write(`data: ${JSON.stringify({ error: "An error occurred during analysis." })}\n\n`);
        res.end();
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
