import { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "..";
import { stripe } from "../../lib/stripe";

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  const { bag } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "method not allowed.",
    });
  }
  if (!bag) {
    return res.status(400).json({
      error: "price was not found.",
    });
  }

  const success_url = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${process.env.APP_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: "payment",
    line_items: bag,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
};

export default checkout;
