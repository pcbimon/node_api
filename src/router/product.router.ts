import Router from 'express';
import {sequelize} from '../models/';
import {QueryTypes} from "sequelize";

export const product = Router();

// Home page route.
product.get('/:id', function (req:any, res:any) {
    let id = req.params['deptId'];
    sequelize
        .query(
            'EXEC GetProduct :id',
            {
                replacements: { id: '1'},
                type: QueryTypes.SELECT
            })
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            //res.json(error);
        })
});

//module.exports = wiki;
