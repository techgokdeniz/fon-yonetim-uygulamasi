import ResponseGenerator from "@/lib/ResponseGenerator";
import verifyJwt from "../../../lib/verifyJwt";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let verify = await verifyJwt(req);

    return ResponseGenerator(res, 200, false, null, verify);
  }
}
