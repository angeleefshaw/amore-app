DROP database IF exists interview_mania;

CREATE DATABASE interview_mania ;

USE interview_mania;

CREATE TABLE quizzes (
topic_id int PRIMARY KEY,
topic_name varchar(15)
);

INSERT INTO quizzes (topic_id, topic_name)
VALUES (1, 'javascript');

INSERT INTO quizzes (topic_id, topic_name)
VALUES (2, 'nodejs');

INSERT INTO quizzes (topic_id, topic_name)
VALUES (3, 'react');

INSERT INTO quizquizzeszes (topic_id, topic_name)
VALUES (4, 'Amazon Web Services');