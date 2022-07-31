'use strict';

class Collection {
    constructor(mode) {
        this.model = model; // creates an encapsulated reference to the SQL model { schema, queryInterface }
        this.association = new Map(); // map structure to hold our associated model for a many-to-many association
    }

    async create(obj, options) {
        // create a new model
        let item = await this.model.create(obj);

        if(options) {
            if(options.association){
                this.createAssociation(item, options.association);
            }
        }
        return item;
    }

    async read(id) {
        let options = { includes: [...this.associations.keys()]};
        let records = null;

        if(id) {
            options['where'] = { id };
            items = await this.model.findOne(options);
        } else {
            items = await this.model.findAll(options);
        }
        return items;
    }

    async update(id) {
        if(!id){
            throw new Error(`No such id ${id}`);
        }
        let item = await this.model.findOne({
            where: { id }
        });
        let updatedItem = await item.update(obj);
        return updatedItem;
    }

    async delete(id) {
        if(!id){
            throw new Error(`No such record with id ${id}`);
        }
        let item = await this.model.destroy({
            where: { id },
        });
        return item;
    }

    belongsToManyThrough(collection, model) {
        this.model.belongsToMany(collection.model, {
            through: model
        });
        this.association.set(collection.model, model);
    }

    /**
     * creates join table record
     * @param {Sequelize Model Instance} - record
     * @param {Object<id INT, Sequelize Model>} - association
    */

    async createAssociation(record, association) {
        if(!this.association.has(association.collection.model)){
            throw new Error("No association found for that collection");
        }
        let associatedModel = this.associations.get(association.collection.model);
        let associatedModelRecord = await associatedModel.create({
            [`${this.model.name}Id`]: record.id,
            [`${association.collection.model.name}Id`]: association.id,
        });
        return associationModelRecord;
    }
}

module.exports = Collection;
