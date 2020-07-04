package jason.idv.blog.dao;

import java.util.List;

import jason.idv.blog.model.entity.Article;
import jason.idv.blog.model.vo.ArticleVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.jdbc.SQL;
import org.apache.logging.log4j.util.Strings;
import org.springframework.data.jpa.repository.JpaRepository;

public class ArticleDao {
    public interface Jpa extends JpaRepository<Article, Long> {

    }

    @Mapper
    public interface Mybatis {
        @SelectProvider(type = Schema.class,
                method = "findNewest")
        List<ArticleVo.Newest> findNewest();

        @SelectProvider(type = Schema.class,
                method = "findProfile")
        ArticleVo findProfile(Long articleId);

        @SelectProvider(type = Schema.class,
                method = "findByKeyword")
        List<ArticleVo> findByKeyword(String keyword);
    }

    public static class Schema {
        public String findNewest() {
            return new SQL() {{
                SELECT("id," +
                        "title," +
                        "content");
                FROM("article");
                ORDER_BY("modified_date desc");
                LIMIT(6);
            }}.toString();
        }

        public String findProfile(Long articleId) {
            return new SQL() {{
                SELECT("id," +
                        "title," +
                        "content," +
                        "modified_date AS modifiedDate");
                FROM("article");
                WHERE("id = #{articleId}");
            }}.toString();
        }

        public String findByKeyword(String keyword) {
            return new SQL() {{
                SELECT_DISTINCT("article.id AS id," +
                        "article.title AS title," +
                        "article.content AS content," +
                        "article.modified_date AS modifiedDate");
                FROM("hashtag tag");
                JOIN("article_hashtag_mapping mapping ON mapping.hashtag_id = tag.id");
                JOIN("article ON article.id = mapping.article_id");
                if(Strings.isNotEmpty(keyword)){
                    WHERE("tag.name LIKE '%' || #{keyword} || '%'");
                    OR();
                    WHERE("article.title LIKE '%' || #{keyword} || '%'");
                }
                ORDER_BY("article.modified_date desc");
            }}.toString();
        }
    }
}
