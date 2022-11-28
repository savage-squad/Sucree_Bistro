package com.project.uniamerica.descomplica.backend.security.domain;

import com.project.uniamerica.descomplica.backend.user.JwtUser;
import lombok.*;
import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.UUID;

@EqualsAndHashCode(of = "uuid")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    private String uuid = UUID.randomUUID().toString();

    @Column
    private String token;

    @Column
    private ZonedDateTime expiration;

    @OneToOne
    @JoinColumn(nullable = false, name = "user_id")
    private JwtUser user;

}