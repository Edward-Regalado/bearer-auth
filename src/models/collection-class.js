'use strict';

class Collection {
    constructor(model, app, route) {
        this.model = model;
        this.routeModel(app, route);
    }

    async create(req, res) {
        try {
            const object = this.model.build(req.body);
            await object.save();
            res.status(200).send('object was created successfully');
        } catch (error) {
            console.log(error);
        }
    };

    async read(req, res) {
        let options = {};
        let records = null;
        try {

        } catch (error) {

        }
    }

    routeModel = (app, route) => {
        app.post(`/${route}`, (req, res) => this.create(req, res));
        // app.get(`/${route}`, (req, res) => this.read(req, res));
        // app.get(`/${route}/:id`, (req, res) => this.read(req, res));
        // app.put(`/${route}/:id`, (req, res) => this.update(req, res));
        // app.delete(`/${route}/:id`, (req, res) => this.delete(req, res));
    };
};

module.exports = Collection;


