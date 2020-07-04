package jason.idv.blog.config;


import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

/**
 * 來自前端的url，靜態資源會預設走/static，前端Ajax設定走/api
 * 故這個Filter設置若非這兩個開頭的Url一律導回SpringBoot的"/"
 * 也就是直接導向static中的index.html
 */
@Component
public class RedirectToIndexFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String requestURI = req.getRequestURI();

        if (requestURI.startsWith("/static") || requestURI.startsWith("/api")) {
            chain.doFilter(request, response);
            return;
        }

        request.getRequestDispatcher("/").forward(request, response);
    }
}
