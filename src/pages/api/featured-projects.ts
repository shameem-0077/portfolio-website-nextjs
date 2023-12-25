import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  page: number
) {
  const ITEMS_PER_PAGE = 4;
  
  page = Number(req.query.page) || 1;

  const skip = (page - 1) * ITEMS_PER_PAGE
  let { db } = await connectToDatabase();
  const count = await db.collection("featured_projects").estimatedDocumentCount({})
  const data = await db.collection("featured_projects").find().limit(ITEMS_PER_PAGE).skip(skip).toArray()

  const pageCount = customRound(count / ITEMS_PER_PAGE)
  const response_data = {
    pagination: {
      count: count,
      pageCount: pageCount
    },
    data
  }
  res.status(200).json({ response_data });
}


function customRound(number: number) {
  // Get the decimal part of the number
  var decimal = number % 1;

  // Check if the decimal part is greater than or equal to 0.2
  if (decimal >= 0.2) {
      // Round up
      return Math.ceil(number);
  } else {
      // Round down
      return Math.floor(number);
  }
}