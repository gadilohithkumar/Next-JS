// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "src/config/db";

export default async function handler(req, res) {
  const results = await pool.query("SELECT * from NOW()");
  res.status(200).json({ result: results });
}
 