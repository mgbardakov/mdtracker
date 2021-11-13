INSERT INTO position (name) VALUES ('руководитель');

INSERT INTO employee (name, position_id)
VALUES ('Петров Сергей Николаевич', 1);

INSERT INTO authority (role) VALUES ('ROLE_USER'), ('ROLE_ADMIN');
INSERT INTO users (user_name, password, employee_id) VALUES ('admin', '$2a$10$uPEwJrOjZUOy2ItDwoSQ4u8LqUfBNU/pCZHXQtjl0ayOOdWavZPLu', 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (1, 2);
