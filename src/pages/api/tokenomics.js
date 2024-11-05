// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "totalSupply": "15000000",
      "publicSale": "0.24",
      "farmingPool": "27.3",
      "staking": "15.3",
      "ecosystem": "0.75",
      "advisor": "7.03",
      "privateSale": "23.45",
      "liquidity": "13.3",
      "marketing": "7.3",
      "team": "5.3"
    },
  )
}
