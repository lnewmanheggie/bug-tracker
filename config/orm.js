const connection = require('./connection');

const orm = {

    selectAll: function(table_name) {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM ??";
            connection.query(queryString, [table_name], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })
    },

    insertOne: function(title, bug) {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO tracker (title, bug) VALUES (?, ?)";
            connection.query(queryString, [title, bug], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        });
    },
 
    updateOne: function(id) {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE tracker SET completed = 1 WHERE id = ?";
            connection.query(queryString, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })
    },

    deleteOne: function(id) {
        return new Promise((resolve, reject) => {
            const queryString = "DELETE FROM tracker WHERE id = ?";
            connection.query(queryString, [id], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })
    }
}

module.exports = orm;