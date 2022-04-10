const S3 = require('aws-sdk/clients/s3');


const region = process.env.REACT_APP_AWS_REGION;
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_KEY;
const bucket = process.env.REACT_APP_AWS_BUCKET;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
});

const getUrlImg = async () => {
    const data =  await s3.getObject(
        {
            Bucket:bucket,
            Key:'video/colocacion.mp4'
          }
        
      ).promise();
      // const blob = new Blob(data.Body, {type: data.ContentType})
      // const file = URL.createObjectURL(blob); 
      // console.log(123, blob)
      var params = {
        Bucket : bucket,
        Key    : 'video/colocacion.mp4',
        Expires: 60*5   //5 minutes
      };

      s3.getSignedUrl('getObject', params, function(err, url)
         {
            if (err) { throw {msg:err, code:"AWS_ERROR"}; }
            
            else { console.log(url) 
              return url; }
         });  
      // return data     
}


module.exports = {
  getUrlImg
}