dist1=E2KOULZ5DS0O8R
dist2=E3NZW1DYYU1P0O
id1=$(aws cloudfront create-invalidation --paths /*  --distribution-id $dist1 --profile VeoliaWaters | grep Id | awk '{print $1 $2}' | cut -d : -f2 | sed 's/\"//g')
id2=$(aws cloudfront create-invalidation --paths /*  --distribution-id $dist2 --profile VeoliaWaters | grep Id | awk '{print $1 $2}' | cut -d : -f2 | sed 's/\"//g')
echo 'Invalidation ID for US Region is' $id1
echo 'Invalidation ID for UK Region is' $id2
#aws cloudfront wait invalidation-completed --distribution-id $dist1 --profile VeoliaWaters --id $id1
aws cloudfront wait invalidation-completed --distribution-id $dist2 --profile VeoliaWaters --id $id2
echo 'CDN has been updated.'