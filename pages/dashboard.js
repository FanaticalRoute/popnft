import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Image from "next/image";
import css from "../styles/dashboard.module.css";
import Link from "next/link";
import Profile from "../Components/Profile";
import Wallet from "../Components/Wallet";
import { useRouter } from 'next/router';


function Dashboard(props) {
  const router = useRouter()

  const [account, setAccount] = useState("");
  const [present, setPresent] = useState(false);
  const [nftPresent, setNftPresent] = useState(false);
  const [result, setResults] = useState("")
  const [nfts, setNfts] = useState([]);

  const { authenticate, isAuthenticated, user, Moralis, isInitialized } =
    useMoralis();

  const Web3API = useMoralisWeb3Api();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("yo");
      // console.log(user?.attributes?.accounts[0]);
      // setAccount(user.attributes.accounts[0]);
      getAccounts();
      setPresent(false);
    } else {
      console.log("no");
      router.push({
        pathname: '/'
    })
    }
  }, [isAuthenticated]);

  const getAccounts = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setPresent(true);
      initializeMoralis(accounts[0]);
      return accounts[0];
    } else {
      console.log("not found");
      return "";
    }
  };

  if (typeof window !== "undefined") {
    const x =
      window &&
      window.ethereum.on("accountsChanged", function (accounts) {
        // Time to reload your interface with accounts[0]!
        setAccount(accounts[0]);
        // initializeMoralis(accounts[0]);
      });
  }

  const initializeMoralis = async (acc) => {
    console.log(acc);
    const options = {
      chain: "rinkeby",
      address: acc,
    };
    const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
    console.log(polygonNFTs);
    setNfts(polygonNFTs);

    const contract_add = "0x17873484b24e74c22e750f82f5e7414100f4d0a8";
    const token_id = "5";

    // var metadata = polygonNFTs.result[1].metadata;
    // metadata = JSON.parse(metadata);

    // let url = metadata.image;

    // const pos = url.indexOf("ipfs://");

    // url = "https://ipfs.io/ipfs/" + url.slice(pos + 6);

    // setImageUrl(url);

    setNftPresent(true);
    console.log("hey");
  };

  useEffect(() => {
    if (isInitialized && present) {
      initializeMoralis(account);
    }
  }, [account]);

  const goToValue= () => {

  }

  return (
    <div>
      <div className={css.headerSide}>
        <div className={css.headerLogo}>
          <a href="https://popnft.vercel.app">
            <Image
              src="/poNft wtext.png"
              objectFit="contain"
              layout="fill"
              alt="Popnft Logo"
            />
          </a>
        </div>
        <div className={css.sideWallet}>
          {present && <Wallet account={account} />}
        </div>
      </div>
      <div className={css.centerCont}>
        <h1 className={css.headingTweetsTitle}>
          Choose an <span className={css.yellowTitle}>NFT</span> collection
        </h1>
        <div className={css.gridGallery}>
          {/* //you can put an array with titles, images and then map it. search array.map
            //to add images outside file, https://nextjs.org/docs/basic-features/image-optimization#domains */}
          {nftPresent &&
            nfts.result.map((nft, i) => {
              if (nft.metadata !== null) {
                const metadata = JSON.parse(nft.metadata);
                console.log(metadata);
                let url = metadata.image;
                
                console.log(url);

                const pos = url.indexOf("ipfs://");
                if(pos > -1)
                  url = "https://ipfs.io/ipfs" + url.slice(pos + 6);

                return (
                  <div key={i}>
                    <Link href={`/home/${metadata.name}`} passHref>
                      <div key={i} className={css.gridItem}>
                        <div className={css.imageItem}>
                          <Image
                            src={url}
                            layout="fill"
                            alt=""
                          />
                        </div>
                        <h2>{metadata.name}</h2>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
