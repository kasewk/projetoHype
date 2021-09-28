
exports.up = function (knex) {
    return knex.schema.createTable('predios', table => {
        table.increments('id').primary(),
            table.string('nome').notNull(),
            table.string('sigla').notNull(),
            table.string('endereco').notNull(),
            table.string('cidade').notNull(),
            table.string('estado').notNull(),
            table.integer('apartamentos').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('predios')
};
