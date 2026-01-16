const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Lead = require("./models/Lead");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Lead.deleteMany({});

  const leads = Array.from({ length: 300 }).map(() => ({
    
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    company: faker.company.name(),

    status: faker.helpers.arrayElement(["new", "contacted", "converted", "lost"])

  }));

  await Lead.insertMany(leads);
  console.log("Leads seeded");
  process.exit();
});
