CREATE DATABASE bug_tracker_db;

USE bug_tracker_db;

CREATE TABLE tracker(
    id INT AUTO_INCREMENT,
    bug VARCHAR(50),
    completed boolean default 0
    PRIMARY KEY (id)
);
