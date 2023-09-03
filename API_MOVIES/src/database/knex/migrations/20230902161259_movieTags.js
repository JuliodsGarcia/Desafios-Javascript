exports.up = (knex) =>
  knex.schema.createTable("movie_tags", (table) => {
    table.increments("id").primary();
    table.text("name");
    table
      .integer("note_id")
      .references("id")
      .inTable("movie_notes")
      .onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("movie_tags");
