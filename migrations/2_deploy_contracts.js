var Ethbet = artifacts.require("./Ethbet.sol");

module.exports = function(deployer) {

  //Parameters for the contract deployment
  const adminAddr = "0xf43142d41d92da6B9EbE2CbBd7E661eeee97edB0";
  const relayAddr = "0xf43142d41d92da6B9EbE2CbBd7E661eeee97edB0";
  const tokenAddr = "0x83ed0aa694ec683102673c1e66d58dcb4ee071a7";
  const makerFee = 1000000;
  const callerFee = 1000000;

  deployer.deploy(Ethbet, adminAddr, relayAddr, tokenAddr, makerFee, callerFee);
};
