import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "method not allowed.",
    });
  }
  if (!priceId) {
    return res.status(400).json({
      error: "price was not found.",
    });
  }

  const success_url = `${process.env.APP_URL}/success`;
  const cancel_url = `${process.env.APP_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
};

export default checkout;
