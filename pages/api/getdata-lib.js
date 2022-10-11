import { query } from "../../lib/db";

export default async function handler(req, res) {
    const id = req.body.id;
    try {

    const querySql = 
        "SELECT item_id, name_item, desc_item, price, size, quantity_stock FROM items WHERE item_id = ?";
    const valuesParams = [id];
    const data = await query ({ query: querySql, values:valuesParams });

    res.status(200).json ({ items : data });
    } catch (error) { 
     res.status(500).json({error: error.message});
    }
}