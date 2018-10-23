package com.myownbank.dao;

import com.myownbank.domain.CreditAccount;
import org.springframework.data.repository.CrudRepository;

public interface CreditAccountDao extends CrudRepository<CreditAccount,Long> {

    CreditAccount findByAccountNumber (int accountNumber);
}
