package com.myownbank.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.myownbank.domain.PrimaryTransaction;

public interface PrimaryTransactionDao extends CrudRepository<PrimaryTransaction, Long> {

    List<PrimaryTransaction> findAll();
}
