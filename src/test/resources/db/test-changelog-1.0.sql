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

CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    user_name TEXT,
    password TEXT,
    employee_id INT REFERENCES employee(id),
    account_non_expired BOOLEAN,
    account_non_locked BOOLEAN,
    credentials_non_expired BOOLEAN,
    enabled BOOLEAN
);

CREATE TABLE IF NOT EXISTS authority (
    id SERIAL PRIMARY KEY,
    role TEXT
);

CREATE TABLE IF NOT EXISTS user_authority (
    id SERIAL PRIMARY KEY,
    user_id INTEGER references user(id),
    authority_id INTEGER references authority(id)
);
