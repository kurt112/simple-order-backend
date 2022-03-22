const express = require('express');
const router = express.Router();
const sha1 = require('sha1')
const axios = require('axios');

router.post('/pay', async (req,res) => {
  const {amount,txnid,callback_url,name,mobile,description,redirect_url} = req.body.data;

  const sha = await sha1(`${amount}${txnid}08919f7b1e1299f74feb4309ab388d12e6e868ae`)
  const formData = {
    amount: amount,
    txnid: txnid,
    callback_url: callback_url,
    digest: sha,
    name,
    mobile,
    description,
    redirect_url
  };
  await axios.post('https://pgi-stg-ws.pearlpay.io/api/v1/transactions/generate',formData,{
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Content-Type':'application/json',
      'X-PearlPay-Token': '08919f7b1e1299f74feb4309ab388d12e6e868ae',
      'X-PearlPay-Code': 'PEARLPAY_TEST_BILLER'
    }
  }).then(response => {
     const {url} = response.data.data;
     return res.status(200).send({url:url})
  }).catch(error => {
     return res.status(error);
  });
})

module.exports = router;
