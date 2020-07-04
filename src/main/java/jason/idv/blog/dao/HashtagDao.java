package jason.idv.blog.dao;

import java.util.List;

import jason.idv.blog.model.entity.Hashtag;
import jason.idv.blog.model.vo.HashtagVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.jdbc.SQL;
import org.springframework.data.jpa.repository.JpaRepository;

public class HashtagDao {

    public interface Jpa extends JpaRepository<Hashtag, Long> {}

    @Mapper
    public interface Mybatis {
        @SelectProvider(type = Schema.class,
                method = "findNewest")
        List<HashtagVo.Newest> findNewest();

        @SelectProvider(type = Schema.class, method = "findNamesByArticleId")
        List<String> findNamesByArticleId(Long articleId);
    }

    public static class Schema {
        public String findNewest() {
            return new SQL() {{
                SELECT("id," +
                        "name");
                FROM("hashtag");
                ORDER_BY("created_date desc");
                LIMIT(10);
            }}.toString();
        }

        public String findNamesByArticleId(Long articleId) {
            return new SQL() {{
                SELECT("hashtag.name");
                FROM("article_hashtag_mapping mapping");
                JOIN("hashtag ON hashtag.id = mapping.hashtag_id");
                WHERE("mapping.article_id = #{articleId}");
            }}.toString();
        }
    }
}
