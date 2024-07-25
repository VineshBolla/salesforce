public with sharing class AccountHandler {
    @AuraEnabled
    public static Account createAccountWithName(String accountName, String age){
        Account account = new Account(name = accountName, NaicsCode = age);
        INSERT account;
        return account;
//testvinesh123today
//trying with github repo
    }

    @AuraEnabled
    public static Account createRecord(String jsonRecord){
        Account account = (Account) JSON.deserialize(jsonRecord, Account.class);
        INSERT account;
        return account;
    }
}
