package jason.idv.blog.controller;

import java.io.IOException;
import java.util.List;

import jason.idv.blog.facade.ArticleFacade;
import jason.idv.blog.model.vo.ArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SearchController {

    @Autowired
    private ArticleFacade facade;

    @GetMapping("/search")
    public List<ArticleVo> search(String keyword) throws IOException {
        return facade.queryByKeyword(keyword);
    }
}
