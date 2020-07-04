package jason.idv.blog.controller;

import java.io.IOException;
import java.util.List;

import jason.idv.blog.facade.ArticleFacade;
import jason.idv.blog.model.vo.ArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ArticleController {

  @Autowired private ArticleFacade facade;

  @GetMapping("/article/newest")
  public List<ArticleVo.Newest> queryNewestArticles() throws IOException {
    return facade.queryNewestArticles();
  }

  @GetMapping("/article/{articleId}")
  public ArticleVo queryProfile(@PathVariable Long articleId) throws IOException {
    return facade.queryProfile(articleId);
  }
}
