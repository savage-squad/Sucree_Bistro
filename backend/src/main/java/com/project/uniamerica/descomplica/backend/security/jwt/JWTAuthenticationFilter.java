package com.project.uniamerica.descomplica.backend.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.security.payload.request.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@RequiredArgsConstructor
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            var creds = new ObjectMapper().readValue(request.getInputStream(), LoginRequest.class);

            var authToken = new UsernamePasswordAuthenticationToken(creds.getUsername(), creds.getPassword(), new ArrayList<>());

            return authenticationManager.authenticate(authToken);
        }catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication authResult) throws IOException {

        var token = jwtUtils.generateJwtToken(authResult);

        String body = "{\"token\": \"" + token + "\"}";
        res.setContentType("Application/json");
        res.setCharacterEncoding("UTF-8");
        res.getWriter().write(body);
    }

    private static class JWTAuthenticationFailureHandler implements AuthenticationFailureHandler {

        @Override
        public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException ex)
                throws IOException {
            response.setStatus(401);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(prepareMessageToJson(ex.getMessage(), request.getRequestURI()));
        }

        private String prepareMessageToJson(String message, String path) {
            var df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssX");
            var date = df.format(new Date());

            return "{\"timestamp\": \"" + date + "\", "
                    + "\"status\": 401, "
                    + "\"error\": \"Not authorized\", "
                    + "\"message\": \"" + message + "\", "
                    + "\"path\": \"" + path + "\" }";
        }


    }


}
