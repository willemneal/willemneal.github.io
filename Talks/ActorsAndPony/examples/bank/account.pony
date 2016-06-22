actor BankAccount
  var _balance: I64
  let env: Env

  new create(env': Env, balance: I64) =>
    env = env'
    _balance = balance

  be deposit(amt: I64, sender: Person) =>
      _balance = amt + _balance
      sender.depositResponse("Successful Deposit. Current Balance: $" +  _balance.string())

  be withdraw(amt: I64, sender: Person) =>
    if (_balance - amt) < 0 then
      sender.withdrawResponse("Failure: Not enough funds")
    else
      _balance = _balance - amt
      sender.withdrawResponse("Successful Withdraw. Current Balance: $" + _balance.string())
    end

  be printBalance()=>
    env.out.print("Current balance: $" + _balance.string())

actor Person
  let env: Env
  new create(env': Env)=>
    env = env'

  be withdrawResponse(msg: String)=>
    env.out.print(msg)

  be depositResponse(msg: String) =>
    env.out.print(msg)

actor Main
  new create(env: Env) =>
    var account = BankAccount(env, 100)
    account.printBalance()
    var alice = Person(env)
    var bob   = Person(env)
    account.withdraw(101, alice)
    account.deposit(1, bob)
    account.withdraw(101, alice)
    account.printBalance()
