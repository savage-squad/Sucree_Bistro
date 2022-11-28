package com.project.uniamerica.descomplica.backend.security.application.port;

import com.project.uniamerica.descomplica.backend.security.domain.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

    Optional<RefreshToken> findRefreshTokenByToken(String token);

}