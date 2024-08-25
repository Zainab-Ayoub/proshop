import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

//@desc      Create new order 
//@route     POST api/orders
//@access    Private

const addOrderItems = asyncHandler(async (req, res) => {
    res.send('add order items');
});
