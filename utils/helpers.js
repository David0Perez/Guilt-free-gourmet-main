module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY => by the time the user creates recipes and comments.
        return date.toLocaleDateString();
    }
};
