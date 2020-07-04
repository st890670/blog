package jason.idv.blog.model.vo;

import lombok.Getter;
import lombok.Setter;

public class HashtagVo {

    @Getter
    @Setter
    public static class Newest {
        private Long id;
        private String name;
    }
}
