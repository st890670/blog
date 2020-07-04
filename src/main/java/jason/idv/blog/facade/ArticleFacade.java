package jason.idv.blog.facade;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import jason.idv.blog.crypt.Base64Crypt;
import jason.idv.blog.model.entity.Attach;
import jason.idv.blog.model.vo.ArticleVo;
import jason.idv.blog.service.ArticleService;
import jason.idv.blog.service.AttachService;
import jason.idv.blog.service.HashtagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleFacade {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private HashtagService hashtagService;

    @Autowired
    private AttachService attachService;

    @Autowired
    private Base64Crypt base64Crypt;

    public ArticleVo queryProfile(Long articleId) throws IOException {
        ArticleVo articleVo = articleService.queryProfile(articleId);
        articleVo.setHashtags(hashtagService.getNamesByArticleId(articleId));
        Attach image = attachService.queryOne(Attach.TYPE.ARTICLE, articleId);
        articleVo.setImageName(image.getName());
        Optional.ofNullable(attachService.queryFile(image.getUuid()))
                .ifPresent(imageBytes -> articleVo.setImageContent(base64Crypt.encode(imageBytes)));

        return articleVo;
    }

    public List<ArticleVo.Newest> queryNewestArticles() throws IOException {
        List<ArticleVo.Newest> articleVos = articleService.queryNewest();
        for (ArticleVo.Newest vo : articleVos) {
            Attach image = attachService.queryOne(Attach.TYPE.ARTICLE, vo.getId());
            vo.setImageName(image.getName());
            Optional.ofNullable(attachService.queryFile(image.getUuid()))
                    .ifPresent(imageBytes -> vo.setImageContent(base64Crypt.encode(imageBytes)));
        }
        return articleVos;
    }

    public List<ArticleVo> queryByKeyword(String keyword) throws IOException {
        List<ArticleVo> result = articleService.queryByKeyword(keyword);
        for (ArticleVo articleVo : result) {
            articleVo.setHashtags(hashtagService.getNamesByArticleId(articleVo.getId()));
            Attach image = attachService.queryOne(Attach.TYPE.ARTICLE, articleVo.getId());
            articleVo.setImageName(image.getName());
            Optional.ofNullable(attachService.queryFile(image.getUuid()))
                    .ifPresent(imageBytes -> articleVo.setImageContent(base64Crypt.encode(imageBytes)));
        }
        return result;
    }
}
