const {marked} = require('marked');

const postMarkdown = async (req, res, next) => {
  try {
    const { text } = req.body;
    console.log(text)
    const htmlGenerated = marked(text);
    res.status(200).json({
      success: true,
      htmlGenerated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

module.exports = { postMarkdown };