usDist=E6C5IVF7KYD9P
ukDist=E2RH2JBC3UI9WB
echo 'US Dist' $usDist
ech  'UK Dist' $ukDist
id1=$(aws cloudfront create-invalidation --paths /var/www/html/*  --distribution-id $usDist | grep Id | awk '{print $1 $2}' | cut -d : -f2 | sed 's/\"//g')
id2=$(aws cloudfront create-invalidation --paths /var/www/html/*  --distribution-id $ukDist | grep Id | awk '{print $1 $2}' | cut -d : -f2 | sed 's/\"//g')
echo 'Invalidation ID for US CDN is ' $id1
echo 'Invalidation ID for UK CDN is ' $id2
# aws cloudfront wait invalidation-completed --distribution-id $usDist --id $id1
aws cloudfront wait invalidation-completed --distribution-id $ukDist --id $id2
exit
echo 'CDN has been updated.'