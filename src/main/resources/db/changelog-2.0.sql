INSERT INTO position (name) VALUES ('сотрудник'), ('руководитель');

INSERT INTO employee (name, position_id)
VALUES ('Иван Иванов', 1), ('Петр Петров', 1);

INSERT INTO device (name, serial_number, verification_expire, taken, employee_id)
VALUES ('линейка', '666', '2023-05-16 15:36:38', true, 1),
       ('штангенциркуль', '420', '2020-03-11 12:00:00', true, 2),
       ('транспортир', '69', '2022-06-10 15:00:00', true, 1),
       ('шумомер', '1488', '2023-05-11 14:00:00', true, 1);

INSERT INTO device_movement (taken, returned, device_id, employee_id)
VALUES ('2021-01-09 12:00:00', '2021-01-09 17:00:00', 1, 1),
       ('2021-01-09 12:00:00', '2021-01-09 17:00:00', 3, 1),
       ('2021-02-01 09:00:00', '2021-02-01 17:00:00', 1, 1),
       ('2021-03-04 10:00:00', '2021-03-04 16:00:00', 4, 2),
       ('2021-03-07 10:00:00', null, 1, 1),
       ('2021-03-07 10:00:00', null, 3, 1),
       ('2021-03-07 10:00:00', null, 4, 1),
       ('2021-03-07 10:00:00', null, 3, 2);


INSERT INTO authority (role) VALUES ('ROLE_USER'), ('ROLE_ADMIN');
INSERT INTO users (user_name, password, employee_id) VALUES ('admin', '$2a$10$uPEwJrOjZUOy2ItDwoSQ4u8LqUfBNU/pCZHXQtjl0ayOOdWavZPLu', 1),
('user', '$2a$10$hcZjVAVgdIowoLPVlZ0fteMXYwqsFjSXO2Jgqh6Sew4EmjzYqhxbS', 2);
INSERT INTO user_authority (user_id, authority_id) VALUES (1, 2), (2, 1);
