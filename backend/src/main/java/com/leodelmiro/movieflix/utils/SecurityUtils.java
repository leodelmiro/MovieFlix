package com.leodelmiro.movieflix.utils;

import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtils {

    public static String getLoggedUsername() {
        if (SecurityContextHolder.getContext().getAuthentication() != null) {
            return SecurityContextHolder.getContext().getAuthentication().getName();
        } else {
            return null;
        }
    }
}
