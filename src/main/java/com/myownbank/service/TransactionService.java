package com.myownbank.service;

import java.security.Principal;
import java.util.List;

import com.myownbank.domain.PrimaryAccount;
import com.myownbank.domain.PrimaryTransaction;
import com.myownbank.domain.Recipient;
import com.myownbank.domain.CreditTransaction;
import com.myownbank.domain.LoanApplication;
import com.myownbank.domain.SavingsAccount;
import com.myownbank.domain.SavingsTransaction;

public interface TransactionService {
    
	List<PrimaryTransaction> findPrimaryTransactionList(String username);

    List<SavingsTransaction> findSavingsTransactionList(String username);
    
    List<CreditTransaction> findCreditTransactionList(String username);    

    void savePrimaryDepositTransaction(PrimaryTransaction primaryTransaction);

    void saveSavingsDepositTransaction(SavingsTransaction savingsTransaction);
    
    void savePrimaryWithdrawTransaction(PrimaryTransaction primaryTransaction);
    
    void saveSavingsWithdrawTransaction(SavingsTransaction savingsTransaction);
    
    void saveCreditTransaction(CreditTransaction creditTransaction);
    
    void betweenAccountsTransfer(String transferFrom, String transferTo, String amount, PrimaryAccount primaryAccount, SavingsAccount savingsAccount) throws Exception;
    
    List<Recipient> findRecipientList(Principal principal);

    Recipient saveRecipient(Recipient recipient);

    Recipient findRecipientByName(String recipientName);

    void deleteRecipientByName(String recipientName);
	
    List<LoanApplication> findLoanApplicationList(Principal principal);

    LoanApplication saveLoanApplication(LoanApplication loanapplication);

    LoanApplication findLoanApplicationByName(String loanapplicationtName);

    void deleteLoanApplicationByName(String loanapplicationName); 
    
    void toOthersTransfer(Recipient recipient, String accountType, String amount, PrimaryAccount primaryAccount, SavingsAccount savingsAccount);
}
