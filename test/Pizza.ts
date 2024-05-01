
import hre, { ethers } from "hardhat";
import { makeDeployProxy2 } from "./deployProxyCreate3";
  
  describe("Pizza", function () {
    it.only("should pizza", async function () {
        const deployProxyCreate3 = makeDeployProxy2(hre);

        const SLICES = 8;

        const Pizza = await ethers.getContractFactory("Pizza");

        console.log("Deploying Pizza...");
       
        const pizza = await deployProxyCreate3(Pizza, [SLICES], {
          initializer: "initialize",
        });
        await pizza.waitForDeployment();
       
        console.log("Pizza deployed to:", pizza.address);
    })

  });
  