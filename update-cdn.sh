usDist=E6C5IVF7KYD9P
ukDist=E2RH2JBC3UI9WB
id1=$(aws cloudfront create-invalidation --paths ec2-54-218-152-159.us-west-2.compute.amazonaws.com  --distribution-id $usDist --profile VeoliaWaters | grep Id | awk '{print $1 $2}' | cut -d : -f2 | sed 's/\"//g')
#id2=$(aws cloudfront create-invalidation --paths ec2-35-177-21-226.eu-west-2.compute.amazonaws.com  --distribution-id $ukDist --profile VeoliaWaters | grep Id | awk '{print $1 $2}' | cut -d : -f2 | sed 's/\"//g')

echo 'Invalidation ID for US CDN is ' $id1
#echo 'Invalidation ID for UK CDN is ' $id2
aws cloudfront wait invalidation-completed --distribution-id $usDist --profile VeoliaWaters --id $id1
#aws cloudfront wait invalidation-completed --distribution-id $ukDist --profile VeoliaWaters --id $id2
echo 'CDN has been updated.'