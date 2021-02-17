const orm = require('../config/orm');

const tracker = {
    selectAll: function () {
       return orm.selectAll("tracker");
    },

    insertOne: function (cols, vals) {
       return  orm.insertOne("tracker", cols, vals);
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("tracker", objColVals, condition, res => cb(res));
    },

    deleteOne: function (condition, cb) {
        orm.deleteOne("tracker", condition, res => cb(res));
    }
}

module.exports = tracker;