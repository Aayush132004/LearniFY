const questionsDB = require("../questionsDB");

const getProblemByClass = async (req, res) => {
    try {
        const { Class } = req.params;
        const classData = questionsDB[Class];

        if (!classData) {
            return res.status(404).json({ 
                success: false, 
                message: `No questions found for Class ${Class}. Please use 9, 10, 11, or 12.` 
            });
        }

        // --- DATA TRANSFORMATION ---
        // Create a new object to hold the data we want to send to the frontend.
        const responseData = {
            physics: [],
            chemistry: [],
            maths: []
        };

        // Loop through each subject in the class data (physics, chemistry, maths)
        for (const subject in classData) {
            // For each subject, create a new array containing only the id and text of each question.
            responseData[subject] = classData[subject].map(question => ({
                id: question.id,
                text: question.text
            }));
        }

        // Send the transformed data (without keyPoints) to the frontend.
        res.status(200).json({
            success: true,
            data: responseData
        });

    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ 
            success: false, 
            message: "An internal server error occurred." 
        });
    }
};

module.exports = { getProblemByClass };