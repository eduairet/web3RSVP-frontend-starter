import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
  //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
  const contractAddress = "0x066116d553430FEe2c0fed10F2768961fB96f37a";
  const contractABI = abiJSON.abi;
  let rsvpContract;
  try {
    const { ethereum } = window;
    if (ethereum.chainId === "0x13881") {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      throw new Error("Please connect to the Polygon Mumbai network.");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return rsvpContract;
}

export default connectContract;
