USE interview_mania;

CREATE TABLE questions (
question_id int PRIMARY KEY,
question varchar(255) NOT NULL,
topic_id int NOT NULL, 
    INDEX `idx_topic`(topic_id),
    CONSTRAINT `fk_topic_id`
    FOREIGN KEY (topic_id)
    REFERENCES quizzes(topic_id) ON UPDATE CASCADE ON DELETE RESTRICT
);



INSERT INTO questions (question_id, question, topic_id)
VALUES (1, 'Which of the following function joins all elements of an array into a string?', 1);