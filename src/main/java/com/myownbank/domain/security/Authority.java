package com.myownbank.domain.security;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority{

    /**
	 * 
	 */
	private static final long serialVersionUID = -5455867797757934457L;
	private final String authority;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
