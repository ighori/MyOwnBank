package com.myownbank.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.myownbank.domain.LoanApplication;

public interface LoanApplicationDao extends CrudRepository<LoanApplication, Long> {
    
    List<LoanApplication> findAll();

    LoanApplication findByName(String loanapplicationName);

    void deleteByName(String loanapplicationName);
}
