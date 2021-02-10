CREATE DATABASE bug_tracker_db;

USE bug_tracker_db;

CREATE TABLE tracker(
    id INT AUTO_INCREMENT,
    title VARCHAR(100),
    bug VARCHAR(50),
    completed boolean default 0
    PRIMARY KEY (id)
);

alter table tracker
add title varchar(100);

insert into tracker (title, bug, completed)
values ("hello", "hello test", 0), ("hellsdfsdfdo", "hellosdfsdfsdfdf test", 1);

delete from tracker where id = 3;
select * from tracker;