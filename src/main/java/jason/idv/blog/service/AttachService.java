package jason.idv.blog.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import jason.idv.blog.dao.AttachDao;
import jason.idv.blog.model.entity.Attach;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AttachService {

    @Autowired
    private AttachDao.Jpa repo;

    private Path getAttachDirPath() {
        String rootDir = System.getProperty("user.home");
        return Paths.get(rootDir).resolve("blog-attach");
    }

    public Attach queryOne(Byte type, Long srcId) {
        List<Attach> attaches = repo.findByTypeAndSrcId(type, srcId);
        return attaches.size() > 0 ? attaches.get(0) : null;
    }

    public byte[] queryFile(UUID uuid) throws IOException {
        Path attachPath = getAttachDirPath().resolve(uuid.toString());
        return Files.exists(attachPath) ? Files.readAllBytes(attachPath) : null;
    }
}
