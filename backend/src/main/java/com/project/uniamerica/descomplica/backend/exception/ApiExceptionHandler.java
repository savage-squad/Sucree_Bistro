package com.project.uniamerica.descomplica.backend.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(BusinessRuleException.class)
    public ResponseEntity<ApiErrorResponse> businessRuleException(BusinessRuleException ex, HttpServletRequest request){
        return buildMessageError(ex.getMessage(),request, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> resourceNotFoundException(ResourceNotFoundException ex, HttpServletRequest request){
        return buildMessageError(ex.getMessage(),request,HttpStatus.NOT_FOUND);
    }

    private ResponseEntity<ApiErrorResponse> buildMessageError(String message, HttpServletRequest request, HttpStatus status){
        var responseBody = new ApiErrorResponse(status.value(),message,request.getRequestURI());
        return ResponseEntity.status(status).body(responseBody);
    }
}
