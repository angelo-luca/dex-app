// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": "1",
        "name": "Servora Dex",
        "img1Src": "/images/igo/author/1.png",
        "img2Src": "/images/chain/binance.png",
        "price": "0.59",
        "raised": "5000",
        "days": "2 days"
      },
      {
        "id": "2",
        "name": "Cyber battlefield",
        "img1Src": "/images/igo/author/6.png",
        "img2Src": "/images/chain/binance.png",
        "price": "0.59",
        "raised": "13600",
        "days": "3 days"
      },
      {
        "id": "3",
        "name": "Torgo IDO",
        "img1Src": "/images/igo/author/3.png",
        "img2Src": "/images/chain/eth.png",
        "price": "0.39",
        "raised": "14000",
        "days": "4 days"
      },
      {
        "id": "4",
        "name": "Red Monster",
        "img1Src": "/images/igo/author/1.png",
        "img2Src": "/images/chain/binance.png",
        "price": "0.34",
        "raised": "15000",
        "days": "5 days"
      },
      {
        "id": "5",
        "name": "Hulk City",
        "img1Src": "/images/igo/author/5.png",
        "img2Src": "/images/chain/metic.png",
        "price": "0.81",
        "raised": "15000",
        "days": "1 week"
      }
    ],
  )
}
