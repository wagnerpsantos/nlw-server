import Knex from 'knex';

// CREATE TABLE
export async function up(Knex: Knex) {
    return Knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

// CREATE TABLE FALLBACK
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('points');
}
