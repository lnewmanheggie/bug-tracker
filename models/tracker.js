const orm = require('../config/orm');

const tracker = {
    selectAll: function(cb) {
        orm.selectAll("tracker", res => cb(res));
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("tracker", cols, vals, res => cb(res));
    },
    
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("tracker", objColVals, condition, res => cb(res));
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("tracker", condition, res => cb(res));
    }
}

module.exports = tracker;