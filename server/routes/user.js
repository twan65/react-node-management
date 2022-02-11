const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    email: "twan65@test.co.jp",
    image: "https://placeimg.com/64/64/any",
    name: "Antaewoong1",
    birthday: "19900605",
    address1: "東京都",
    address2: "荒川区",
    address3: "荒川３−７２−２K2K ２０２",
    gender: "男性",
    position: "エンジニア",
    skills: [
      { name: "java", rating: 3 },
      { name: "node.js", rating: 5 },
      { name: "React", rating: 2 },
    ],
    certificates: [],
    role: "ADMIN",
  },
  {
    id: 2,
    email: "twan65@test.co.jp",
    image: "https://placeimg.com/64/64/any",
    name: "Antaewoong1",
    birthday: "19900605",
    address1: "東京都",
    address2: "荒川区",
    address3: "荒川３−７２−２K2K ２０２",
    gender: "男性",
    position: "エンジニア",
    skills: [
      { name: "C", rating: 5 },
      { name: "node.js", rating: 1 },
      { name: "Spring", rating: 2 },
    ],
    certificates: [],
    role: "USER",
  },
  {
    id: 3,
    email: "twan65@test.co.jp",
    image: "https://placeimg.com/64/64/any",
    name: "Antaewoong1",
    birthday: "19900605",
    address1: "東京都",
    address2: "荒川区",
    address3: "荒川３−７２−２K2K ２０２",
    gender: "男性",
    position: "エンジニア",
    skills: [
      { name: "java", rating: 3 },
      { name: "node.js", rating: 5 },
      { name: "React", rating: 2 },
    ],
    certificates: [],
    role: "USER",
  },
];

router.get("/", (req, res, next) => {
  res.send(users);
});

router.get("/:id", (req, res, next) => {
  res.send(users.find((e) => e.id == req.params.id));
});

router.post("/", (req, res, next) => {
  let entity = req.body;
  const userIndexList = users.map((e) => e.id);
  const maxIndex = Math.max(...userIndexList);
  const user = {
    id: maxIndex + 1,
    ...entity,
    skills: [],
    certificates: [],
    image: "https://placeimg.com/64/64/any",
  };
  users.push(user);

  res.send(user);
});

router.post("/login", (req, res, next) => {
  let entity = req.body;
  const userIndexList = users.map((e) => e.id);
  const maxIndex = Math.max(...userIndexList);
  const user = {
    id: maxIndex + 1,
    ...entity,
    skills: [],
    certificates: [],
    image: "https://placeimg.com/64/64/any",
  };
  users.push(user);

  res.send(user);
});

module.exports = router;
