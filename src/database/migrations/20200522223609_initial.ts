import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable("users", (table: Knex.CreateTableBuilder) => {
      table.increments("id");
      table.string("full_name", 36);
      table.string("country_code", 5);
      table.timestamps(true, true);
    })
    .createTable("pets", (table: Knex.CreateTableBuilder) => {
      table.increments("id");
      table.string("name");
      table.integer("owner_id").references("users.id").unsigned().onDelete("CASCADE");
      table.string("specie");
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<any> {
  return
}
