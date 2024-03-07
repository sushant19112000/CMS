const axios = require('axios');

const categories = [
    { "name": "Artificial Intelligence" },
    { "name": "B2B" },
    { "name": "Compliance" },
    { "name": "Content Syndication" },
    { "name": "Demand Generation" },
    { "name": "Intent Data" },
    { "name": "Lead Generation" },
    { "name": "Market Research" },
    { "name": "Marketing Insight" },
    { "name": "Sales Insights" },
    { "name": "Surveys" },
    { "name": "Tools And Technologies" },
    { "name": "Uncharted" }
];

const apiEndpoint = 'http://localhost:5000/api/insightsCategories';


const postCategoryToAPI = async (category) => {
    try {
        const response = await axios.post(apiEndpoint, category ,{ headers: { "Content-Type": "text/plain" } });
        console.log(`Category posted successfully: ${response.data}`);
    } catch (error) {
        console.error('Error posting category:', error.message);
    }
};


categories.forEach(postCategoryToAPI);
