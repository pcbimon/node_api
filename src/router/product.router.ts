import Router from 'express';
import {sequelize} from '../models/';
import {QueryTypes} from "sequelize";
import {ResultFormated} from '../function/result';

export const product = Router();

// Home page route.
product.get('/:id', function (req:any, res:any) {
    try {
        let id = req.params['deptId'];
        sequelize
            .query(
                'EXEC GetProduct2 :id',
                {
                    //Replace para with value
                    replacements: { id: '1'},
                    //Type of Query
                    type: QueryTypes.SELECT
                })
            .then(data => {
                // Return Json with Format Data
                res.json(ResultFormated("0","Success",data));
                // res.json(data);
            })
            .catch(error => {
                // Return Json with Format Data
                res.json(ResultFormated(error.original.code,error.original.message,{}));
                // res.json(error);
            });
    } catch (e) {
        res.json(ResultFormated("3",e.message,{}));
    }

});

//module.exports = wiki;
