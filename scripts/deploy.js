const hre = require("hardhat");

async function main() {
  
  // Greeter.sol contract
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  // Token.sol contract
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // Vote.sol contract

  const Voter = await ethers.getContractFactory('Vote');
  const [deployer] = await ethers.getSigners();
  const voter = await Voter.deploy([
    '0x44656d6f63726174000000000000000000000000000000000000000000000000',
    '0x52657075626c6963616e00000000000000000000000000000000000000000000',
    '0x496e646570656e64656e74000000000000000000000000000000000000000000',
    '0x616e617263687900000000000000000000000000000000000000000000000000',
  ]);
  console.log('Voter address:', voter.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
