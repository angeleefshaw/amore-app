use interview_mania;

CREATE TABLE answers (
answer_id int PRIMARY KEY,
answer VARCHAR(255) NOT NULL,
correct BOOLEAN NOT NULL,
question_id int NOT NULL,
	INDEX `idx_question`(question_id),
    CONSTRAINT `fk_question_id`
    FOREIGN KEY (question_id)
    REFERENCES questions(question_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

INSERT INTO answers (answer_id, answer, correct, question_id)
VALUES (1, 'join()', true, 1);

INSERT INTO answers (answer_id, answer, correct, question_id)
VALUES (2, 'map()', false, 1);

INSERT INTO answers (answer_id, answer, correct, question_id)
VALUES (3, 'unite()', false, 1);
