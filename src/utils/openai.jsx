import OpenAI from "openai";
import { NETFLIX_GPT_API } from "./constant";

export const openai = new OpenAI({
  apiKey: NETFLIX_GPT_API,
  dangerouslyAllowBrowser: true,
});

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [{ role: "user", content: "write a haiku about ai" }],
// });

// completion.then((result) => console.log(result.choices[0].message));
