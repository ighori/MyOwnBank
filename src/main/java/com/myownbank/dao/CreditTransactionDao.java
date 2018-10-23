package com.myownbank.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.myownbank.domain.CreditTransaction;

public interface CreditTransactionDao extends CrudRepository<CreditTransaction, Long> {

    List<CreditTransaction> findAll();
}
