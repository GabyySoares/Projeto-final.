import { NFTStorage, File } from "nft.storage"
import fs from 'fs'

const NFT_STORAGE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI3ODA3ZEVDRkNkMDU5OTA3NTM3ZUQyOTJDZkJEM0IwNGI3ZTdjOWEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NTU1NjM1NTMwOSwibmFtZSI6Im5mdCJ9.fb6eWJ8sCDtOpxA9BdKs1zihcd5GJ2DL2ejdY_BurWA"

const API_KEY = NFT_STORAGE_API_KEY

async function storeAsset() {
   const client = new NFTStorage({ token: API_KEY })
   const metadata = await client.store({
       name: 'Kitty Patita calma',
       description: 'La enamorada del gato de botas, gata mas linda del caribe.',
       image: new File(
           [await fs.promises.readFile('gato3.png')],
           'gato3.jpg',
           { type: 'image/png' }
       ),
   })
   console.log("Metadados armazenados no Filecoin e IPFS na URL:", metadata.url)
}

// async function storeAsset() {
//     const client = new NFTStorage({ token: API_KEY })
//     const metadata = await client.store({
//         name: 'The Puss in Boots',
//         description: 'The puss in boots is a movie character that interprets a CAT , just this, with boots OK?',
//         image: new File(
//             [await fs.promises.readFile('gato1.png')],
//             'gato1.jpg',
//             { type: 'image/png' }
//         ),
//     })
//     console.log("Metadados armazenados no Filecoin e IPFS na URL:", metadata.url)
//  }

// async function storeAsset() {
//     const client = new NFTStorage({ token: API_KEY })
//     const metadata = await client.store({
//         name: 'Tinoca el gato CHATO',
//         description: 'Lo gato que mas grita de todos los gatos del universo',
//         image: new File(
//             [await fs.promises.readFile('gato2.png')],
//             'gato2.jpg',
//             { type: 'image/png' }
//         ),
//     })
//     console.log("Metadados armazenados no Filecoin e IPFS na URL:", metadata.url)
//  }

storeAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });