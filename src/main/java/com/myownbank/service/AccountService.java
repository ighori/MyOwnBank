package com.myownbank.service;

import java.security.Principal;

import com.myownbank.domain.CreditAccount;
import com.myownbank.domain.PrimaryAccount;
import com.myownbank.domain.SavingsAccount;

public interface AccountService {
	
    PrimaryAccount createPrimaryAccount();
    
    SavingsAccount createSavingsAccount();
    
    CreditAccount createCreditAccount();
    
    void deposit(String accountType, double amount, Principal principal);
    
    void withdraw(String accountType, double amount, Principal principal);
    
}
