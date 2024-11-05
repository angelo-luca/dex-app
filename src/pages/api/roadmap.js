// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": "1",
        "date": "Jan 2021",
        "title": "Concept",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "2",
        "date": "Feb 2021",
        "title": "Research",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "3",
        "date": "Mar 2021",
        "title": "Token Sale",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "4",
        "date": "Aprin 2021",
        "title": "Pre-sale",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "5",
        "date": "May 2021",
        "title": "IDO Launch",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "6",
        "date": "June 2021",
        "title": "Metaverse",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "7",
        "date": "July 2021",
        "title": "DeFi Launch",
        "text": "Lorem Ipsum available, but the majority have"
      }
    ],
  )
}
