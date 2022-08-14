
// domain/.netlify/functions/create-payment
// server bc not safe to do as front end
require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)
exports.handler = async function (event, context) {
    if (event.body) {

        const { cart, totalVal, tax, shipping } = JSON.parse(event.body)

        const total = () => {
           
            return Math.floor((parseInt(totalVal)/100)*(100+parseInt(tax)))+parseInt(shipping) 

        }
        console.log(total)

        try {
            const payment = await stripe.paymentIntents.create({
                amount: total()
                , currency: "usd"
            })

            return {
                statusCode:200,
                body:JSON.stringify({clientSecret:payment.client_secret})
            }

        }
        catch (err) {
            return{
                statusCode:500,
                body:JSON.stringify({error:err.message})
            }


        }

    }
    return {
        statusCode: 200,
        body: "fail "
    }
}