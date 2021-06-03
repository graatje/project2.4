package Exceptions;

public class ThreadNotFoundException extends RuntimeException{
    public ThreadNotFoundException(Long id){
        super("Kon geen forum thread vinden met id: " + id);
    }
}
