package ru.tehnotron.mdtracker.exception;


public class UserStateException extends Exception {


    public UserStateException(String msg) {
        super(msg);
    }


    public UserStateException(String msg, Throwable t) {
        super(msg, t);
    }
}
