package Exceptions;

public class RecipeNotFoundException extends RuntimeException {

    RecipeNotFoundException(Long id){
        super("Could not find recipe with id: " + id);
    }
}
