package com.project.uniamerica.descomplica.backend.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.security.application.RefreshTokenService;
import com.project.uniamerica.descomplica.backend.security.domain.JwtResponseDto;
import com.project.uniamerica.descomplica.backend.user.JwtUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class AuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final JwtUserService jwtUserService;
    private final JwtUtils jwtUtils;
    private final RefreshTokenService refreshTokenService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        var user = jwtUserService.getJwtUserByUsername(principal.getUsername());
        String token = jwtUtils.createJwt(user.getEmail());
        String refreshToken = refreshTokenService.createToken(user);
        response.addHeader("Authorization", "Bearer " + token);
        response.addHeader("Content-Type", "application/json");
        response.getWriter().write(objectMapper.writeValueAsString(JwtResponseDto.of(token, refreshToken)));
    }

}