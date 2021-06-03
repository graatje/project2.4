package Forum;

import Exceptions.ThreadNotFoundException;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@RestController
public class ForumController {

    private final ForumRepository repository;
    private final ForumThreadModelAssembler assembler;

    ForumController(ForumRepository repository, ForumThreadModelAssembler assembler) {
        this.repository = repository;
        this.assembler = assembler;
    }

    @GetMapping("/noticeboard")
    CollectionModel<EntityModel<ForumThread>> getAllThreads() {
        List<EntityModel<ForumThread>> threads = repository.findAll().stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(threads,
                linkTo(methodOn(ForumController.class).getAllThreads()).withSelfRel());
    }

    @PostMapping("/noticeboard")
    ForumThread newThread(@RequestBody ForumThread thread) {
        return repository.save(thread);
    }


    @GetMapping("/noticeboard/{id}")
    EntityModel<ForumThread> getThread(@PathVariable Long id) {
        ForumThread thread = repository.findById(id).orElseThrow(() -> new ThreadNotFoundException(id));

        return assembler.toModel(thread);
    }

    @PutMapping("/noticeboard/{id}")
    ForumThread replaceThread(@RequestBody ForumThread newThread, @PathVariable Long id) {
        return repository.findById(id).map(thread -> {
            thread.setAuthor(newThread.getAuthor());
            thread.setTitle(newThread.getTitle());
            return repository.save(thread);
        })
                .orElseGet(() -> {
                    newThread.setId(id);
                    return repository.save(newThread);
                });
    }

    @DeleteMapping("/noticeboard/{id}")
    void deleteThread(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
