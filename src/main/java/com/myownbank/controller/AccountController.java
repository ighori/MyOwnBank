package com.myownbank.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.myownbank.domain.CreditAccount;
import com.myownbank.domain.CreditTransaction;
import com.myownbank.domain.PrimaryAccount;
import com.myownbank.domain.PrimaryTransaction;
import com.myownbank.domain.SavingsAccount;
import com.myownbank.domain.SavingsTransaction;
import com.myownbank.domain.User;
import com.myownbank.service.AccountService;
import com.myownbank.service.TransactionService;
import com.myownbank.service.UserService;

@Controller
@RequestMapping("/account")
public class AccountController {
	
	@Autowired
    private UserService userService;
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private TransactionService transactionService;
	
	@RequestMapping("/primaryAccount")
	public String primaryAccount(Model model, Principal principal) {
		List<PrimaryTransaction> primaryTransactionList = transactionService.findPrimaryTransactionList(principal.getName());
		
		User user = userService.findByUsername(principal.getName());
        PrimaryAccount primaryAccount = user.getPrimaryAccount();
        model.addAttribute("user", user);
        model.addAttribute("primaryAccount", primaryAccount);
        model.addAttribute("primaryTransactionList", primaryTransactionList);
		
		return "primaryAccount";
	}

	@RequestMapping("/savingsAccount")
    public String savingsAccount(Model model, Principal principal) {
		List<SavingsTransaction> savingsTransactionList = transactionService.findSavingsTransactionList(principal.getName());
        User user = userService.findByUsername(principal.getName());
        SavingsAccount savingsAccount = user.getSavingsAccount();

        model.addAttribute("user", user);
        model.addAttribute("savingsAccount", savingsAccount);
        model.addAttribute("savingsTransactionList", savingsTransactionList);

        return "savingsAccount";
    }
	
	@RequestMapping("/creditAccount")
	public String creditAccount(Model model, Principal principal) {
		List<CreditTransaction> creditTransactionList = transactionService.findCreditTransactionList(principal.getName());
		
		User user = userService.findByUsername(principal.getName());
        CreditAccount creditAccount = user.getCreditAccount();
        model.addAttribute("user", user);
        model.addAttribute("creditAccount", creditAccount);
        model.addAttribute("creditTransactionList", creditTransactionList);
		
		return "creditAccount";
	}
	
	
	@RequestMapping(value = "/deposit", method = RequestMethod.GET)
    public String deposit(Model model , Principal principal) {
		
        User user = userService.findByUsername(principal.getName());
        
        model.addAttribute("user", user);
		model.addAttribute("accountType", "");
        model.addAttribute("amount", "");

        return "deposit";
    }

    @RequestMapping(value = "/deposit", method = RequestMethod.POST)
    public String depositPOST(@ModelAttribute("amount") String amount, @ModelAttribute("accountType") String accountType, Principal principal) {
        accountService.deposit(accountType, Double.parseDouble(amount), principal);

        return "redirect:/home";
    }
    
    @RequestMapping(value = "/withdraw", method = RequestMethod.GET)
    public String withdraw(Model model, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        
        model.addAttribute("user", user);
    	
    	model.addAttribute("accountType", "");
        model.addAttribute("amount", "");

        return "withdraw";
    }

    @RequestMapping(value = "/withdraw", method = RequestMethod.POST)
    public String withdrawPOST(@ModelAttribute("amount") String amount, @ModelAttribute("accountType") String accountType, Principal principal) {
        accountService.withdraw(accountType, Double.parseDouble(amount), principal);

        return "redirect:/home";
    }
    
	@RequestMapping(value = "/cardPayment", method = RequestMethod.GET)
    public String cardPayment(Model model , Principal principal) {
		
        User user = userService.findByUsername(principal.getName());
        
        model.addAttribute("user", user);
		model.addAttribute("accountType", "");
        model.addAttribute("amount", "");

        return "cardPayment";
    }

    @RequestMapping(value = "/cardPayment", method = RequestMethod.POST)
    public String cardPaymentPOST(@ModelAttribute("amount") String amount, @ModelAttribute("accountType") String accountType, Principal principal) {
        accountService.deposit(accountType, Double.parseDouble(amount), principal);

        return "redirect:/home";
    }
    
}
