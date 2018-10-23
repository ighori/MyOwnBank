package com.myownbank.controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.myownbank.dao.RoleDao;
import com.myownbank.domain.CreditAccount;
import com.myownbank.domain.PrimaryAccount;
import com.myownbank.domain.PrimaryTransaction;
import com.myownbank.domain.SavingsAccount;
import com.myownbank.domain.User;
import com.myownbank.domain.security.UserRole;
import com.myownbank.service.UserService;
import com.myownbank.service.TransactionService;

@Controller
public class HomeController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private TransactionService transactionService;
	
	@Autowired
    private RoleDao roleDao;
	
//	@RequestMapping("/")
//	public String home() {
//		return "redirect:/index";
//	}
//	
//	@RequestMapping("/index")
//    public String index() {
//        return "index";
//    }
	
	@RequestMapping("/")
	public String home() {
		return "redirect:/login";
	}
	
	@RequestMapping("/login")
    public String login() {
        return "login";
    }
	
	@RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(Model model) {
        User user = new User();

        model.addAttribute("user", user);

        return "signup";
    }
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
    public String signupPost(@ModelAttribute("user") User user,  Model model) {

        if(userService.checkUserExists(user.getUsername(), user.getEmail()))  {

            if (userService.checkEmailExists(user.getEmail())) {
                model.addAttribute("emailExists", true);
            }

            if (userService.checkUsernameExists(user.getUsername())) {
                model.addAttribute("usernameExists", true);
            }

            return "signup";
        } else {
        	 Set<UserRole> userRoles = new HashSet<>();
             userRoles.add(new UserRole(user, roleDao.findByName("ROLE_USER")));

            userService.createUser(user, userRoles);

//            return "redirect:/index";
            return "redirect:/login";
        }
    }
	
	@RequestMapping("/home")
	public String myOwnBank(Principal principal, Model model) {
	List<PrimaryTransaction> primaryTransactionList = transactionService.findPrimaryTransactionList(principal.getName());
        User user = userService.findByUsername(principal.getName());
        PrimaryAccount primaryAccount = user.getPrimaryAccount();
        SavingsAccount savingsAccount = user.getSavingsAccount();
        CreditAccount creditAccount = user.getCreditAccount();

        model.addAttribute("user", user);
        model.addAttribute("primaryAccount", primaryAccount);
        model.addAttribute("savingsAccount", savingsAccount);
        model.addAttribute("creditAccount", creditAccount);        
	model.addAttribute("primaryTransactionList", primaryTransactionList);

        return "home";
    }

}
