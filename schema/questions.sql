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

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (31, 'You are a developer who has been hired to lead the development of a new application. The application needs to interact with a backend-data-store. The application also needs to perform many complex join operations. Which of the following would be the ideal data-store option?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (32, 'You are a developer for your company. You are working on creating Cloudformation templates for different environments. You want to be able to base the creation of the environments on the values passed at runtime to the template. How can you achieve this?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (33, 'As a developer responsible for the deployment of AWS Lambda functions, which of the following collated services would you NOT use for the automated deployment of a Lambda based application?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (34, 'You are using Amazon DynamoDB for storing all product details for an online furniture store. Which of the following expressions can be used to return the Color and Size Attribute of the table during query operations?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (35, 'Your company is developing an application tailored towards mobile users. Users need the ability to authenticate themselves via identity providers through Security Assertion Markup Language 2.0. Which of the following services should be used for user management?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (36, 'You are defining a Redis cluster using the AWS ElastiCache service. You need to define common values across the nodes for memory usage and item sizes. Which component of the ElastiCache service allows you to define this?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (37, 'Your team lead has finished creating a build project in the console. You have access to run the build but not access to the project. You want to specify a different source location for the build. How can you achieve this?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (38, 'You are planning on using the AWS CodeDeploy tool for the deployment of your application. Which of the following is used to specify how your application will be deployed to the underlying instances?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (39, 'What strategy for ElastiCache can a developer use to ensure the cache always has the most recent data that is present in the database and not stale data?', 4, now(), now());

INSERT INTO questions (question_id, question, topic_id, createdAt, updatedAt)
VALUES (40, 'Which of the following services would you use to check if there were any errors while an AWS Lambda function was being invoked if invocation took place through the API gateway service? ', 4, now(), now());
