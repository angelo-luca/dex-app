// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": "1",
        "name": "Alex Mike",
        "role": "Founder",
        "img": "/images/team/1.png"
      },
      {
        "id": "2",
        "name": "Davide Vice",
        "role": "Co-founder",
        "img": "/images/team/2.png"
      },
      {
        "id": "3",
        "name": "Young Jong",
        "role": "Marketer",
        "img": "/images/team/3.png"
      },
      {
        "id": "4",
        "name": "David Dzune",
        "role": "Advisor",
        "img": "/images/team/4.png"
      },
      {
        "id": "5",
        "name": "Rick Pete",
        "role": "Co-member",
        "img": "/images/team/5.png"
      },
      {
        "id": "6",
        "name": "Adam Hawk",
        "role": "Co-member",
        "img": "/images/team/6.png"
      },
      {
        "id": "7",
        "name": "Micky Gong",
        "role": "Marketer",
        "img": "/images/team/7.png"
      },
      {
        "id": "8",
        "name": "Young Yoko",
        "role": "Advisor",
        "img": "/images/team/8.png"
      }
    ]
  )
}
