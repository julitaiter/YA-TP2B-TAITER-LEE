import { User } from "../models/index.js";


async function userSeed() {
     await User.bulkCreate([{ name: "Julian", mail: "jtaiter@gmail.com", pass: "1234", RoleId: 1 },
     { name: "Aylen", mail: "alee@gmail.com", pass: "1234", RoleId: 1 }
     ])
}


await userSeed()