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

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (1, 'join()', true, 1);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (2, 'map()', false, 1);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (3, 'unite()', false, 1);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (4, 'A function that relies on dependency injection', false, 2);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (5, 'A function where the return value is only determined by its arguments without side effects', true, 2);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (6, 'A function with several side effects and one return statement', false, 2);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (7, 'undefined', false, 3);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (8, 'float', true, 3);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (9, 'number', false, 3);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (10, '<script>', true, 4);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (11, '<scriptlink>', false, 4);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (12, '<javascript>', false, 4);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (13, 'A Variable that controls movement', false, 5);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (14, 'A device that controls input', false, 5);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (15, 'Controlled execution of applications', true, 5);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (16, 'All answers are true', true, 6);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (17, 'Variable used in the code does not exist', false, 6);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (18, 'Variable is not assigned to any value', false, 6);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (19, 'The users machine running a Web browser', true, 7);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (20, 'The web server', false, 7);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (21, 'A central machine deep within the Microsoft central office', false, 7);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (22, 'Shift', false, 8);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (23, 'Splice', true, 8);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (24, 'Move', false, 8);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (25, 'It is used to focus on a particular part of the HTML page', false, 9);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (26, 'It is used to arrange elements on the page', false, 9);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (27, 'It is an HTML attribute use to control an elements behavior', true, 9);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (28, 'Onerror', true, 10);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (29, 'onSuspend', false, 10);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (30, 'onhalt', false, 10);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (31, 'A runtime enviroment for Javascript that runs on the server', true, 11);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (32, 'An open-source, front-end, Javascript library for building UI components', false, 11);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (33, 'A runtime enviroment offering several CSS frameworks directed at responsive design', false, 11);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (34, 'Read Earn Point Learn', false, 12);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (35, 'Read Eval Print Loop', true, 12);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (36, 'Read Eval Point Loop', false, 12);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (37, 'Represents the eventual completion (or failure) of an asynchronous operation and its resulting value', false, 13);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (38, 'Functions that have access to the request object, the reponse object, and the next function in the applications request-response cycle', true, 13);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (39, 'A function passed into another function as an argument and reponsible for overall syling of components', false, 13);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (40, 'PATCH/HEAD/OPTIONS', false, 14);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (41, 'GET/POST/PUT/DELETE', false, 14);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (42, 'All of the above', true, 14);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (43, 'Node Package Manager. It is an open source online repository with its own CLI', true, 15);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (44, 'Node Package Maker. It allows developers to easily ship their code to businesses partners', false, 15);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (45, 'Node Prototype Module. It is a design philosophy we use when creating Node applications', false, 15);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (46, 'It uses a single thread event loop', false, 16);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (47, 'It uses the Spider Monkey (Firefox) engine', true, 16);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (48, 'It is an open-source runtime environment used for creating server side applications', false, 16);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (49, 'File System', true, 17);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (50, 'File Service', false, 17);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (51, 'File Store', false, 17);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (52, 'Multiple threads', false, 18);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (53, 'Multiple processes', false, 18);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (54, 'A single thread', true, 18);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (55, 'Module.exports', false, 19);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (56, 'Node Package Manager', true, 19);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (57, 'REPPL', false, 19);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (58, 'Package', false, 20);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (59, 'Module', true, 20);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (60, 'Library', false, 20);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (61, 'Module', false, 21);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (62, 'Class', false, 21);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (63, 'Component', true, 21);


INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (64, 'js/components', true, 22);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (65, 'vendor/components', false, 22);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (66, 'external/components', false, 22);


INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (67, 'A server-side framework', false, 23);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (68, 'U! Framework', false, 23);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (69, 'A library for building interaction interfaces', true, 23);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (70, 'setState', false, 24);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (71, 'Props', true, 24);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (72, 'propMethods', false, 24);


INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (73, 'State Dom', false, 25);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (74, 'Virtual Dom', true, 25);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (75, 'Original Dom', false, 25);


INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (76, 'An input element with the controlled flag', false, 26);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (77, 'An input element that can only accept a list of characters', false, 26);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (78, 'An input element whose value is being controlled by a components state', true, 26);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (79, 'Using the Array.map() method', true, 27);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (80, 'With a for.while loop', false, 27);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (81, 'Using the reduce array method', false, 27);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (82, 'When the new state should completely replace the old state', true, 28);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (83, 'When the new state depends on the old state', false, 28);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (84, 'All of the above', false, 28);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (85, 'To access the previous state before the setState operation', false, 29);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (86, 'To replace state completely instead of the default merge action', false, 29);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (87, 'To invoke code after the setState operation is done', true, 29);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (88, 'Props', true, 30);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (89, 'Mount', false, 30);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (90, 'Class', false, 30);




INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (91, 'RAM', true, 31);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (92, 'REM', false, 31);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (93, 'ROM', false, 31);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (94, 'Memory', false, 32);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (95, 'Motherboard', false, 32);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (96, 'CPU', true, 32);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (97, 'Graphical User Interruption', false, 33);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (98, 'Graphical User Interface', true, 33);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (99, 'Graphical User Intel', false, 33);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (100, 'Information', true, 34);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (101, 'Website', false, 34);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (102, 'Video', false, 34);




INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (103, 'Stack', false, 35);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (104, 'Linked List', false, 35);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (105, 'Queue', true, 35);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (106, 'Exhibits the worst case performance when the initial array is sorted in reverse order', false, 36);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (107, 'Worst case and average case performance is O(n^2)', false, 36);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (108, 'None of the above', true, 36);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (109, 'To make sure that it is still a complete binary tree', true, 37);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (110, 'Because the left and right subtree might be missing', false, 37);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (111, 'It is the easiest possible way', false, 37);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (112, '10', true, 38);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (113, '2', true, 38);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (114, '1', false, 38);



INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (115, 'Delay Time', false, 39);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (116, 'Real Time', false, 39);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (117, 'CPU Cycle', true, 39);




INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (118, 'URL', true, 40);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (119, 'Http', false, 40);

INSERT INTO Answers (answer_id, answer, correct, question_id)
VALUES (120, 'www', false, 40);