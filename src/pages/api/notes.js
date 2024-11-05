// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": "1",
        "img1Src": "/images/igo/item/01.jpg",
        "img2Src": "/images/chain/aval.png",
        "img3Src": "/images/igo/author/1.png",
        "title": "Dexer Xone"
      },
      {
        "id": "2",
        "img1Src": "/images/igo/item/02.jpg",
        "img2Src": "/images/chain/binance.png",
        "img3Src": "/images/igo/author/2.png",
        "title": "DeFianXer 3dX"
      },
      {
        "id": "3",
        "img1Src": "/images/igo/item/03.jpg",
        "img2Src": "/images/chain/solana.png",
        "img3Src": "/images/igo/author/3.png",
        "title": "Monster X"
      },
      {
        "id": "4",
        "img1Src": "/images/igo/item/04.jpg",
        "img2Src": "/images/chain/eth.png",
        "img3Src": "/images/igo/author/4.png",
        "title": "Servora Dex"
      },
      {
        "id": "5",
        "img1Src": "/images/igo/item/05.jpg",
        "img2Src": "/images/chain/binance.png",
        "img3Src": "/images/igo/author/5.png",
        "title": "DocR Chain"
      },
      {
        "id": "6",
        "img1Src": "/images/igo/item/06.jpg",
        "img2Src": "/images/chain/binance.png",
        "img3Src": "/images/igo/author/5.png",
        "title": "SpeeDEX"
      }
    ],
  )
}
