package com.project.uniamerica.descomplica.backend.security.web;

import com.project.uniamerica.descomplica.backend.security.application.RefreshTokenService;
import com.project.uniamerica.descomplica.backend.security.domain.JwtRefreshRequestDto;
import com.project.uniamerica.descomplica.backend.security.domain.JwtResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final RefreshTokenService refreshTokenService;

    @PostMapping("/refresh")
    public JwtResponseDto refreshJwt(@RequestBody JwtRefreshRequestDto refreshRequestDto) {
        return refreshTokenService.refreshToken(refreshRequestDto);
    }

}