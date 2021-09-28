
exports.up = function (knex) {
    return knex.schema.createTable('apartamentos', table => {
        table.increments('id').primary(),
            table.string('codigo_apartamento').notNull(),
            table.integer('numero_quartos').notNull(),
            table.integer('numero_banheiros').notNull(),
            table.integer('numero_suites').notNull(),
            table.decimal('area_total').notNull(),
            table.integer('id_predio').references('id').inTable('predios')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('apartamentos')
};
