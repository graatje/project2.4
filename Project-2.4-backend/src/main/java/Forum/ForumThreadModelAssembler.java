package Forum;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class ForumThreadModelAssembler implements RepresentationModelAssembler<ForumThread, EntityModel<ForumThread>> {

    @Override
    public EntityModel<ForumThread> toModel(ForumThread thread) {
        return EntityModel.of(thread,
                linkTo(methodOn(ForumController.class).getThread(thread.getId())).withSelfRel(),
                linkTo(methodOn(ForumController.class).getAllThreads()).withRel("prikbord"));
    }
}
