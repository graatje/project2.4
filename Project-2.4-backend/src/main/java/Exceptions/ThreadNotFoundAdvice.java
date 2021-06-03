package Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ThreadNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(ThreadNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String threadNotFoundHandler(ThreadNotFoundException ex){
        return ex.getMessage();
    }
}
