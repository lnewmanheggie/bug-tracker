const connection = require('./connection');
const { printQuestionMarks, objToSql } = require('./ormHelper');


function queryPromise(SQL, DATA = []) {
    return new Promise((resolve, reject) => {
        connection.query(SQL, DATA, (err, result) => {
            if (err) return reject(err);
            resolve(result)
        })
    })
}

const orm = {

    selectAll: function (tableInput) {
        const queryString = "SELECT * FROM ??;";
        return queryPromise(queryString, [tableInput])
    },

    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        // connection.query(queryString, vals, function (err, result) {
        //     if (err) throw err;
        //     cb(result);
        // });

        console.log(queryString)
        console.log(vals)
        return queryPromise(queryString, vals)
    },

    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, cb);
    },

    deleteOne: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;





// keeping for improvements later

// insertOne: function(title, bug) {
//     return new Promise((resolve, reject) => {
//         const queryString = "INSERT INTO tracker (title, bug) VALUES (?, ?)";
//         connection.query(queryString, [title, bug], (err, result) => {
//             if (err) return reject(err);
//             resolve(result);
//         })
//     });
// },

//     updateOne: function(id) {
//         return new Promise((resolve, reject) => {
//             const queryString = "UPDATE tracker SET completed = 1 WHERE id = ?";
//             connection.query(queryString, [id], (err, result) => {
//                 if (err) return reject(err);
//                 resolve(result);
//             })
//         })
//     },

//     deleteOne: function(id) {
//         return new Promise((resolve, reject) => {
//             const queryString = "DELETE FROM tracker WHERE id = ?";
//             connection.query(queryString, [id], (err, result) => {
//                 if (err) return reject(err);
//                 resolve(result);
//             })
//         })
//     }
