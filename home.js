function Home(){ 
  const ctx = React.useContext(UserContext);
  console.log(ctx.users);
  return (
    <center><Card
      bgcolor = "light"
      txtcolor = "info"
      header="Welcome to the Bad Bank!"
      title="Where your money means everything to us! Because we take it!"
      body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
    /></center>
  );  
}
