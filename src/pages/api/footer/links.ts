import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res
    .status(200)
    .json(["thewitcher.com", "playgwent.com", "eu.gear.cdprojektred.com"]);
}