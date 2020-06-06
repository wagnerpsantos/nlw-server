import Knex from 'knex';

// CREATE TABLE
export async function up(Knex: Knex) {
    return Knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

// CREATE TABLE FALLBACK
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('points');
}
