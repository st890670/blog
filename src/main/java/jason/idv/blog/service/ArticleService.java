package jason.idv.blog.service;

import java.util.List;

import jason.idv.blog.dao.ArticleDao;
import jason.idv.blog.model.vo.ArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {

    @Autowired
    private ArticleDao.Mybatis mapper;

    public ArticleVo queryProfile(Long articleId) {
        return mapper.findProfile(articleId);
    }

    public List<ArticleVo> queryByKeyword(String keyword) {
        return mapper.findByKeyword(keyword);
    }

    public List<ArticleVo.Newest> queryNewest() {
        return mapper.findNewest();
    }

}
