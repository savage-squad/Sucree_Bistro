package com.project.uniamerica.descomplica.backend.exception;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.Instant;

@Data
public class ApiErrorResponse {
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd'T'HH:mm:ss:X",timezone = "GMT-3")
    private Instant timestamp;
    private int status;
    private String message;
    private String path;

    public ApiErrorResponse(int status, String message, String path) {
        this.timestamp = Instant.now();
        this.status = status;
        this.message = message;
        this.path = path;
    }
}
