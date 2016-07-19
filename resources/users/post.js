//check is email already exists and set time for new account
dpd.users.get({email : this.email.toString()}, function(results, error) {
  if(results.length > 0){
      cancel("email already exists");
  } else { //set time for new account
      this.createdDate = new Date().getTime();
  }
});