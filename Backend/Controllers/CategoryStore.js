const CategoryMaster = require('../Models/CategoryModel'); // Import your schema


    const CategoryStore = async (req, res) => {
        try {
            const category = new CategoryMaster(req.body);
            await category.save();
            // Return the saved category's ID in the response
            res.status(201).json({ message: 'Category saved successfully', data: category._id });
        } catch (error) {
            console.error('Error:', error);  
            res.status(400).json({ message: 'Error saving category', error: error.message });
        }
    };
    

module.exports = CategoryStore;
