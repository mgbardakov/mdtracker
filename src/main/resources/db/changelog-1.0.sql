CREATE TABLE IF NOT EXISTS position (
    id SERIAL PRIMARY KEY,
    name TEXT,
    visible BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS employee (
    id SERIAL PRIMARY KEY,
    name TEXT,
    position_id INT REFERENCES position(id),
    visible BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS device (
    id SERIAL PRIMARY KEY,
    name TEXT,
    verification_expire TIMESTAMP,
    taken BOOLEAN,
    visible BOOLEAN DEFAULT TRUE,
    employee_id INT REFERENCES employee(id)
);

CREATE TABLE IF NOT EXISTS device_movement (
    id SERIAL PRIMARY KEY,
    taken TIMESTAMP,
    returned TIMESTAMP,
    device_id INT REFERENCES device(id),
    employee_id INT REFERENCES employee(id)
);

INSERT INTO position (name) VALUES ('сотрудник'), ('руководитель');
