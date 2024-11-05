// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": "1",
        "name": "Rodrigues",
        "role": "Investor",
        "img": "/images/team/9.png"
      },
      {
        "id": "2",
        "name": "Rodrigues",
        "role": "Investor",
        "img": "/images/team/10.png"
      },
      {
        "id": "3",
        "name": "Rodrigues",
        "role": "Investor",
        "img": "/images/team/11.png"
      },
      {
        "id": "4",
        "name": "Rodrigues",
        "role": "Investor",
        "img": "/images/team/12.png"
      }
    ]
  )
}
