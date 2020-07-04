package jason.idv.blog.service;

import java.util.List;

import jason.idv.blog.dao.HashtagDao;
import jason.idv.blog.model.vo.HashtagVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HashtagService {

    @Autowired
    private HashtagDao.Mybatis mapper;

    public List<HashtagVo.Newest> queryNewestHashtags() {
        return mapper.findNewest();
    }

    public List<String> getNamesByArticleId(Long articleId) {
        return mapper.findNamesByArticleId(articleId);
    }
}
