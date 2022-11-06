import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";

const success = async (req: NextApiRequest, res: NextApiResponse) => {
  const { sessionID } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({
      error: "method not allowed.",
    });
  }
  if (!sessionID) {
    return res.status(400).json({
      error: "Session Id not provided.",
    });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionID as string, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details?.name;

  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return {
      productName: item.description,
      image: product.images[0],
      id: product.id,
      product,
    };
  });

  const quantityItems = session.line_items?.data.reduce((prev, cur) => {
    return prev + Number(cur.quantity);
  }, 0);

  return res.status(201).json({
    costumerName,
    products,
    quantity: quantityItems,
  });
};

export default success;
