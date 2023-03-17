import json
import openai
import boto3
import random


default_categories = [
'Harry Potter',
'The Witcher',
'Lord of the Rings / The Hobbit',
'Star Wars',
'Star Trek',
'Donald Duck',
'The Avengers',
'Game of Thrones',
'World Wrestling Entertainment (WWE)',
'World Economic Forum (WEF)',
'South Park',
'Family Guy',
'Spongebob',
'Simpsons',
'Smurfs',
'Halloween',
'Pirates of the Caribbean',
'Goonies',
'Frontend frameworks',
'Java',
'Hitchhiker\'s Guide to the Galaxy',
'Discworld',
'Lovecraft',
'Diablo',
'World of Warcraft',
'Walking Dead',
'Stranger Things']

def lambda_handler(event, context):
    
    print('event:', json.dumps(event))
    print('queryStringParameters:', json.dumps(event['queryStringParameters']))

    mode = event['queryStringParameters']['mode']
    provided_categories = event['queryStringParameters']['categories']
    
    categories = get_categories_b(provided_categories);

    model_to_use = "text-davinci-003"
    input_prompt="Write a " + mode + " story about " + categories

    openai.api_key = get_api_key()
    response = openai.Completion.create(
      model=model_to_use,
      prompt=input_prompt,
      temperature=0,
      max_tokens=1000,
      top_p=1,
      frequency_penalty=0.0,
      presence_penalty=0.0
    )
    #print(response)
    text_response = response['choices'][0]['text'].strip()
    return {
        'statusCode':200,
        'body': {
            'response' : text_response,
            'used_categories' : categories,
            'mode' : mode
        }
    }
    
def get_api_key():
    lambda_client = boto3.client('lambda')
    response = lambda_client.invoke(
            FunctionName = 'arn:aws:lambda:eu-west-1:148267025593:function:openai_get_api_key',
            InvocationType = 'RequestResponse'
        )

    openai_api_key = json.load(response['Payload'])['body']['api_key']
    return openai_api_key


def get_categories(number_of_categories):
    return ','.join(random.sample(default_categories, number_of_categories));
    
def get_categories_b(provided_categories):
    provided_count = min(len(provided_categories), len(provided_categories) ** 0) + provided_categories.count(",")
    return provided_categories + "," + get_categories(max(3-provided_count, 1))