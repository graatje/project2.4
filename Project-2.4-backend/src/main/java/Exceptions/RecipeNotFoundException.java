package Exceptions;

public class RecipeNotFoundException extends RuntimeException {

    RecipeNotFoundException(Long id){
        super("Kon geen recept vinden met id: " + id);
    }
}
