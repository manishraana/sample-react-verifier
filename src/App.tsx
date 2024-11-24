import './App.css';
import { getData } from '@tradetrust-tt/tradetrust';
import { utils } from '@tradetrust-tt/tradetrust';
import { openAttestationVerifiers, verificationBuilder, isValid } from '@tradetrust-tt/tt-verify';
import { providers } from 'ethers';
import { amoyv3, stabilityv2, stabilitytestv2, sepoliav3 } from './documents/samples';

function App() {

  const VerifierOptions: any = {
    20180427: {
      provider: new providers.JsonRpcProvider("https://free.testnet.stabilityprotocol.com", 20180427)
    },
    101010: {
      provider: new providers.JsonRpcProvider("https://gtn.stabilityprotocol.com/zgt/", 101010)
    },
    11155111: {
      provider: new providers.JsonRpcProvider("https://rpc.sepolia.org", 11155111)
      // network: "sepolia"
    },
    80002: {
      provider: new providers.JsonRpcProvider("https://rpc-amoy.polygon.technology", 80002)
    }
  }

  const verifyDocument = async (document: any) => {
    let chainId = 11155111; // Sepolia

    if (utils.isWrappedV2Document(document)) {
      const data = getData(document);
      if (data?.network) {
        chainId = Number(data?.network?.chainId);
      }
    } else if (utils.isWrappedV3Document(document)) {
      if (document?.network) {
        chainId = Number(document?.network?.chainId);
      }
    }
    console.log("chainId:", chainId);

    const verify = verificationBuilder(openAttestationVerifiers, VerifierOptions[chainId]);
    const verificationStatus = await verify(document);
    console.log(JSON.stringify(verificationStatus, null, 2));

    const isValidR = isValid(verificationStatus);
    console.log('isValid', isValidR);
  }
  const handleVerify = () => {
    // verifyDocument(amoyv3);
    // verifyDocument(sepoliav3);
    // verifyDocument(stabilityv2);

    verifyDocument({
      "version": "https://schema.openattestation.com/2.0/schema.json",
      "data": {
        "$template": {
          "type": "2d5d7d4b-f0c7-418b-82a5-d91647bca83d:string:EMBEDDED_RENDERER",
          "name": "11350357-119f-490b-a503-ab1b11d18678:string:BILL_OF_LADING",
          "url": "544babb8-ab42-4310-8a65-3f36e4d0d1e1:string:https://blkp-doc-rendr.netlify.app/"
        },
        "network": {
          "chain": "712b0aea-77e0-4343-8bbf-1ab1dab55e1c:string:Global Trust Network",
          "chainId": "946eb2ad-8f79-413e-a42e-9d99929a4004:string:101010"
        },
        "issuers": [
          {
            "name": "9aabbc21-0c7d-48d8-ba6b-7793ebda0d97:string:Blockpeer Finance",
            "tokenRegistry": "b111c943-cca5-439a-a715-bbb3ce75ae35:string:0x109b9cb25be1F9Ce085d22CDA66171c97927d489",
            "identityProof": {
              "type": "f0c27198-f8a7-46f0-af38-4475d9fa76cf:string:DNS-TXT",
              "location": "6c03e6bf-13a4-4b0f-b417-5b1f756f1c65:string:mkebl-stability-local4.blockpeer.finance"
            }
          }
        ],
        "carrierName": "d03ecfbb-1ccb-4f5b-a7f7-0a41bb7373b8:string:Eiusmod excepturi de",
        "companyName": "2c1a0f56-cb41-46f9-aa36-75614ebb605c:string:WorkDo",
        "logo": "2d2b1ce0-8d69-452b-827d-36608990c5f3:string:http://localhost/bp-laravel/uploads/logo/logo_dark.png",
        "blNumber": "250a4f15-89fe-44e7-b3ef-a12ae63a7be0:string:Nam modi ipsam ut am",
        "scac": "1c924f67-3925-4062-b525-3a6f985904f0:string:Adipisicing ea debit",
        "shipper": {
          "name": "1aafff78-172e-4847-893f-d2d8b11d136a:string:Shaeleigh Heath",
          "address": {
            "street": "b839f055-19c7-46d5-a86f-3221b5272a28:string:Sit ipsum quidem do",
            "country": "16bfd98e-e182-40e5-96ef-453d2a3df204:string:Aut ullam odio fugit"
          }
        },
        "consignee": {
          "name": "2f390935-9b7c-443d-b446-515645548fde:string:Eiusmod excepturi de"
        },
        "notifyParty": {
          "name": "71353a05-3aba-464c-a16b-d11cdcceca46:string:Fugit harum elit v"
        },
        "vessel": "f41c20fe-d76c-4461-9b4d-fa5b71e46602:string:Facilis dolores odio",
        "voyageNo": "532b7f04-dd24-47d1-8403-c903f4bb2656:string:Sit voluptate natus",
        "portOfLoading": "587580ff-a6b8-4ab8-a8f6-cc42f96904cd:string:Voluptas soluta temp",
        "portOfDischarge": "d140a662-1c72-473e-9357-4e9aca7f7355:string:Vitae placeat dolor",
        "placeOfReceipt": "6ef6d367-52bc-4e58-97d2-003bf4d98a27:string:Quo iure soluta reru",
        "placeOfDelivery": "4706652b-479f-4345-a1a0-a1e0e6219f98:string:Aliquid ut in est es",
        "packages": [
          {
            "description": "2b848b19-7ab5-4fdc-9feb-691cc288cea8:string:Non amet deleniti p",
            "weight": "9d095f66-2298-42be-8dca-c2c8dee39d0c:string:Veniam iure volupta",
            "measurement": "022ddb9b-b06d-4122-b711-9e25feed4bc4:string:Et natus non est qui"
          }
        ],
        "links": {
          "self": {
            "href": "81747075-3d3f-49a6-8217-18d8f0eeeb4a:string:https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D"
          }
        }
      },
      "signature": {
        "type": "SHA3MerkleProof",
        "targetHash": "3273cdfde35fc7845875fa39b53b79a88a758feba4e13e844cfb73ca25abe0cc",
        "proof": [],
        "merkleRoot": "3273cdfde35fc7845875fa39b53b79a88a758feba4e13e844cfb73ca25abe0cc"
      }
    });
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        onClick={handleVerify}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Verify Document
      </button>
    </div>
  );
}

export default App;