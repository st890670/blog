package jason.idv.blog.controller;

import java.util.List;

import jason.idv.blog.model.vo.HashtagVo;
import jason.idv.blog.service.HashtagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HashtagController {

    @Autowired
    private HashtagService service;

    @GetMapping("/hashtag/newest")
    public List<HashtagVo.Newest> queryNewestHashtags() {
        return service.queryNewestHashtags();
    }
}
