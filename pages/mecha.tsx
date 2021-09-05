// Imports
import { useRouter } from 'next/router';
import styles from "@styles/pages/Home.module.scss"; // Styles
import { ethers } from "ethers";
import Layout from "@components/Layout"; // Layout wrapper
import Image from "next/image"; 

// Types
import type { ReactElement } from "react";

const provider = new ethers.providers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc');
const tokenAddress = '0xfF56b92AEC0F5Acd23f66430c3B7A62af0586A47';
const abi = ["function tokenURI(uint256 tokenId) view returns (string)"];
const mechaContract = new ethers.Contract(tokenAddress, abi, provider);

function Mecha({metadata}: {metadata: {image: string}} ): ReactElement {
  // const loadNft = event => {
  //   event.preventDefault();
  // }

  return (
    <Layout>
      <div>
        {/* <input id="name" type="text" autoComplete="name" required /> */}
        <Image src={metadata.image} width="500" height="500" alt="The MECHA Project logo" />
      </div>  
    </Layout>
  );
}


Mecha.getInitialProps = async (ctx: any) => {
  const { tokenId } = ctx.query;

  

  const data = await mechaContract.tokenURI(tokenId);
  
  const metadata =  JSON.parse(Buffer.from(data.substring(29), 'base64').toString());
  
  return {metadata}
}


export default Mecha