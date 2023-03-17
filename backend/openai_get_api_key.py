import json
import os

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': {
            'api_key' : os.environ['openai_api_key']
        }
    }