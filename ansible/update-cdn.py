from __future__ import print_function
import  boto3
from datetime import datetime 



# session = boto3.Session=(profile_name='VeoliaWaters')
# cloudfront = boto3.session('cloudfront')
cloudfront = boto3.client('cloudfront',aws_access_key_id='AKIAIWD3Z7W33WC4QCLQ',aws_secret_access_key='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')

distributions = ["E2RH2JBC3UI9WB","E6C5IVF7KYD9P"]
try:
    for i in distributions:
        print('Starting invalidation for DistributionId:',i)
        resp = cloudfront.create_invalidation(
            DistributionId=i,
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': [
                        '/*',
                    ]
                },
                'CallerReference': 'jenkins-'+datetime.now().strftime('%Y-%m-%d_%H:%M:%S')
            }
        )
        print('Invalidation created with Id:',resp['Invalidation']['Id'])
        print('Waiting for Invalidation',resp['Invalidation']['Id'],'to be completed..')
        cloudfront.get_waiter('invalidation_completed').wait(DistributionId=i,Id=resp['Invalidation']['Id'])
        print('Completed invalidation for DistributionId:',i,'\n\n')
    print('CDN has been successfully updated.')
except Exception as e:
    print('Error:',e.message)
    print('CDN update failed.')


