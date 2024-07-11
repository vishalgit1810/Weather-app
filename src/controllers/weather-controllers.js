const defaultController = (req, res) => {
    res.render("index", { weather: null, error: null });
};

module.exports = defaultController;
