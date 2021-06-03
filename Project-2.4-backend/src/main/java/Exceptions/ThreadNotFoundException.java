package Exceptions;

public class ThreadNotFoundException extends RuntimeException{
    public ThreadNotFoundException(Long id){
        super("Could not find thread with id: " + id);
    }
}
