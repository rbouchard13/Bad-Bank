function Home(){ 
  const ctx = React.useContext(UserContext);
  console.log(ctx.users);
  return (
    <center><Card
      bgcolor = "light"
      txtcolor = "dark"
      header="Welcome to the Bad Bank!"
      title="Let your money work for you with our industry leading .000000009% interest rate!"
      body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
    /></center>
  );  
}
