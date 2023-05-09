package com.project.uniamerica.descomplica.backend.security;

import com.project.uniamerica.descomplica.backend.security.jwt.AuthEntryPointJwt;
import com.project.uniamerica.descomplica.backend.security.jwt.JWTAuthenticationFilter;
import com.project.uniamerica.descomplica.backend.security.jwt.JWTAuthorizationFilter;
import com.project.uniamerica.descomplica.backend.security.jwt.JwtUtils;
import com.project.uniamerica.descomplica.backend.security.services.UserDetailsServiceImpl;
import io.swagger.models.HttpMethod;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsServiceImpl userDetailsService;
    private final JwtUtils jwtUtils;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/swagger-ui/**", "/api/v3/api-docs/**", "/h2-console/**", "/tables/**", "/commands/**", "/products/**", "/orders/**", "/productTypes/**");

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and().csrf().disable().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()

                .authorizeRequests()
                .antMatchers("/api/auth/signup").permitAll()
                .anyRequest().authenticated()
                .and()

                .addFilter(jwtAuthenticationFilter())
                .addFilter(new JWTAuthorizationFilter(authenticationManager(), jwtUtils, userDetailsService));
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }

    public JWTAuthenticationFilter jwtAuthenticationFilter() throws Exception {
        JWTAuthenticationFilter jwtAuthenticationFilter = new JWTAuthenticationFilter(authenticationManager(), jwtUtils);
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/auth/signin");
        return jwtAuthenticationFilter;
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
