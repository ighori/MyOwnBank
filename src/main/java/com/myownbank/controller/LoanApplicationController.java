package com.myownbank.controller;

import java.security.Principal;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.myownbank.domain.LoanApplication;
import com.myownbank.domain.User;
import com.myownbank.service.TransactionService;
import com.myownbank.service.UserService;

@Controller
@RequestMapping("/appointment")
public class LoanApplicationController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserService userService;
  
    @RequestMapping(value = "/loanApplication", method = RequestMethod.GET)
    public String loanapplication(Model model, Principal principal) {
        List<LoanApplication> loanapplicationList = transactionService.findLoanApplicationList(principal);

        LoanApplication loanapplication = new LoanApplication();
        
    	User user = userService.findByUsername(principal.getName());
    	
        model.addAttribute("user", user);

        model.addAttribute("loanapplicationList", loanapplicationList);
        model.addAttribute("loanapplication", loanapplication);

        return "loanApplication";
    }

    @RequestMapping(value = "/loanApplication/save", method = RequestMethod.POST)
    public String loanapplicationPost(@ModelAttribute("loanapplication") LoanApplication loanapplication, @ModelAttribute("amount") String amount, @ModelAttribute("type") String type, Principal principal) throws ParseException {
    	
//        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd hh:mm");
//        Date d1 = format1.parse( date );
//        loanapplication.setDate(d1);
          	
        User user = userService.findByUsername(principal.getName());
        loanapplication.setUser(user);
        transactionService.saveLoanApplication(loanapplication);

        return "redirect:/appointment/loanApplication";
    }
    
    @RequestMapping(value = "/loanApplication/edit", method = RequestMethod.GET)
    public String loanapplicationEdit(@RequestParam(value = "loanapplicationName") String loanapplicationName, Model model, Principal principal){

        LoanApplication loanapplication = transactionService.findLoanApplicationByName(loanapplicationName);
        List<LoanApplication> loanapplicationList = transactionService.findLoanApplicationList(principal);

        model.addAttribute("loanapplicationList", loanapplicationList);
        model.addAttribute("loanapplication", loanapplication);

        return "loanApplication";
    }

    @RequestMapping(value = "/loanApplication/delete", method = RequestMethod.GET)
    @Transactional
    public String loanapplicationDelete(@RequestParam(value = "loanapplicationName") String loanapplicationName, Model model, Principal principal){

        transactionService.deleteLoanApplicationByName(loanapplicationName);

        List<LoanApplication> loanapplicationList = transactionService.findLoanApplicationList(principal);

        LoanApplication loanapplication = new LoanApplication();
        model.addAttribute("loanapplication", loanapplication);
        model.addAttribute("loanapplicationList", loanapplicationList);


        return "loanApplication";
    }

}
