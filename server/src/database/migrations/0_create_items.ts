import Knex from 'knex';

// CREATE TABLE
export async function up(Knex: Knex) {
    return Knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// CREATE TABLE FALLBACK
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('items');
}
