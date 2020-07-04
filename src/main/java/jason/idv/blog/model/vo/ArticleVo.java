package jason.idv.blog.model.vo;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleVo {
    private Long id;
    private String title;
    private String content;
    private String imageName;
    private String imageContent;
    private Long modifiedDate;
    private List<String> hashtags;

    @Getter
    @Setter
    public static class Newest {
        private Long id;
        private String title;
        private String content;
        private String imageName;
        private String imageContent;
    }
}
