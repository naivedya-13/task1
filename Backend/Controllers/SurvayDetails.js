
const CategoryMaster = require('../Models/CategoryModel');
const SurvaDetailschema = require('../Models/SurveyDetailsSchema');
const SurveyDetails = async (req, res) => {
    const { name, email, age, description, recommend, languages, categoryId } = req.body;

    try {
        // Check if the Category ID is valid
        const category = await CategoryMaster.findById(categoryId);
        if (!category) {
            return res.status(400).json({ message: 'Invalid Category ID' });
        }

        // Create new SurveyDetails document with category reference
        const newSurvey = new SurvaDetailschema({
            name,
            email,
            age,
            description,
            recommend,
            languages,
            category: categoryId, // Store the categoryId as a reference
        });

        // Save the survey data to the database
        await newSurvey.save();

        res.status(201).json({ message: 'Survey submitted successfully!', survey: newSurvey });
    } catch (error) {
        console.error('Error saving survey:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = SurveyDetails;
