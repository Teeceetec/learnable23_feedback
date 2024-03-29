// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});
async function main() {
 
  const random = await hre.ethers.deployContract("Feedback");

  await random.waitForDeployment();

  console.log(
    "Verify Contract Address:", random.target
  );

  console.log("Sleeping.....");
  //Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying.
   await hre.run("verify:verify", {
    address: random.target
   });
}

function sleep (ms) {
   return new Promise((resolve) => setTimeout(resolve,ms))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
