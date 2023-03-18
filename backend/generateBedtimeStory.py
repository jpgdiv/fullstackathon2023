import json
import openai
import boto3
import random


d = [
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
    
    ma = event['queryStringParameters']['mode']

    try:
        pc = event['queryStringParameters']['categories']
    except KeyError as nullPointerException:
        print("NullPointerException: ", nullPointerException)
        pc = ''

    c = xcb(pc);
    mu = "text-davinci-003"
    ip="Write a " + ma + " story, set in a universe based on several given franchises. The story should not contain any of the words of these franchise titles, but do use characters, places and items from the franchises. The story is long and contains many details. The story mentions at least one character, place and item from each franchise.  Franchises:" + c

    openai.api_key = go()
    r = openai.Completion.create(
      model=mu,
      prompt=ip,
      temperature=0.7,
      max_tokens=3000,
      top_p=1,
      frequency_penalty=0.0,
      presence_penalty=0.0
    )
    tr = r['choices'][0]['text'].strip()
    return {
        'statusCode':200,
        'body': {
            'response' : tr,
            'used_categories' : c,
            'all_categories' : xca(pc),
            'mode' : ma
        }
    }
    
def go():
    lc = boto3.client('lambda')
    z = lc.invoke(
            FunctionName = 'arn:aws:lambda:eu-west-1:148267025593:function:openai_get_api_key',
            InvocationType = 'RequestResponse'
        )
    aka = json.load(z['Payload'])['body']['api_key']
    return aka

def xc(n):
    return ','.join(random.sample(d, n));
    
def xcb(pc):
    co = min(len(pc), len(pc) ** 0) + pc.count(",")
    ax = pc + "," + xc(max(3-co, 1))
    return ax.removeprefix(',')
        
def xca(pc):
    bx = pc + "," + ','.join(d)
    return bx.removeprefix(',')