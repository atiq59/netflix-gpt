// import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';
import { OpenRouter } from '@openrouter/sdk';

// const client = new OpenAI({
//   apiKey: OPENAI_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });

// // const completion = await client.chat.completions.create({
// //   model: 'gpt-5.2',
// //   messages: [
// //     { role: 'developer', content: 'Talk like a pirate.' },
// //     { role: 'user', content: 'Are semicolons optional in JavaScript?' },
// //   ],
// // });

// // console.log(completion.choices[0].message);

// export default client;

const client = new OpenRouter({
  apiKey: OPENAI_KEY,
//   defaultHeaders: {
//     'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
//     'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
//   },
});


export default client;