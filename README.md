# Bedtime Story Questionnaire

## Architecture
![image](architecture.png)

## Technology

Svelte-kit is used to build a frontend artifact that is zipped and uploaded to an AWS S3 bucket.
This frontend artifact is an HTML website that can be used to show a bedtime story and quiz the visitor which themes were used in the story.

Python is used to build an application, uploaded to AWS Lambda, that can randomly pick several themes from a hardcoded list and connect to OpenAI and instruct it to generate a bedtime story.
The integration of AWS Lambda, Python and OpenAI is based on a proof of concept described [here](https://thedeveloperspace.com/how-to-invoke-openai-apis-from-aws-lambda-functions/).

There is no infrastructure as code; the AWS environment is set up by hand.

## API

### Sample request

The frontend application can call the backend via a URL like
```
https://<redacted>.lambda-url.eu-west-1.on.aws/?mode=bedtime&categories=
```
All parameters _must_ be provided, or the call will not work.

Valid values for the `mode` parameter are `bedtime` and `dark` and _perhaps_ other mood descriptors.

Valid values for the `categories` parameter are whatever themes you like, separates by commas.

### Sample response

The backend application will respond with a JSON object like
```json
{
  "mode":"bedtime",
  "response":"Once upon a time, there was a family of four living in the Caribbean. They were a family of pirates, and they loved to explore the seas and find new adventures.\n\nOne day, they decided to explore a new island. As they sailed closer, they noticed a strange light coming from the island. When they got closer, they realized it was a giant castle made of Frontend frameworks!\n\nThe family was amazed and decided to explore the castle. As they walked through the castle, they noticed that it was filled with all sorts of strange creatures and objects. They even found a talking parrot that was a fan of the show Family Guy!\n\nThe parrot told them that the castle was built by a powerful wizard who wanted to create a safe haven for all the Frontend frameworks. He had created a magical barrier around the castle that would protect it from any harm.\n\nThe family was so excited to explore the castle and learn more about the wizard and his magical powers. They spent the rest of the day exploring the castle and learning about the wizard's secrets.\n\nAt the end of the day, the family was exhausted but happy. They had had a wonderful day exploring the castle and learning about the wizard's magical powers. As they sailed away, they waved goodbye to the castle and all the Frontend frameworks that lived there.\n\nThe family returned home with many stories to tell and a newfound appreciation for the power of Frontend frameworks.",
  "used_categories":"Pirates of the Caribbean,Frontend frameworks,Family Guy",
  "all_categories":"Pirates of the Caribbean,Frontend frameworks,Family Guy,Spongebob,Smurfs,The Witcher"
}
```
The `mode` field is the `mode` parameter used.

The `response` field is the actual bedtime story.

The `used_categories` field is the comma-separated list of themes used for generating the story.

The `all_categories` field is the comma-separated list of all themes that can be used, including the ones used.

## Use

Ideally, the frontend should offer the visitor the opportunity to fetch a story.
The frontend will let the visitor guess which categories were used for the generated story.

### Easter egg

The visitor can unlock a feature where they can add their own theme for generating a bedtime story, although it will not be the only theme.