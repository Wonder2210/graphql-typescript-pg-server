exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {  full_name: "luis", country_code: 58 },
        {  full_name: "jose", country_code: 59 },
        {  full_name: "raul", country_code: 39 },
      ]);
    })
    .then(() => {
      return knex("pets")
        .del()
        .then(function () {
          // Inserts seed entries
          return knex("pets").insert([
            { name: "spot", owner_id: 1, specie: "MAMMALS" },
            { name: "chief", owner_id: 2, specie: "MAMMALS" },
            { name: "king", owner_id: 3, specie: "MAMMALS" },
          ]);
        });
    });
};
