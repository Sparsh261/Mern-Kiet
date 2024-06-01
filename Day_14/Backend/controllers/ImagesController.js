const generateImageController = async(req,res)=>{
    const body = req.body;
    const text = body.text;
    let url;
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTcyMzE5NzEsImV4cCI6MTcxNzMxODM3MX0.719OuMWrEayMlijY48oTP16DE0Zt9n45LAoR29p6Y1Y",
              "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryCJfH1fmfNa9pq9tF",
              "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site"
            },
            "referrer": "https://hotpot.ai/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${text}\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-hDinFWp5UbYPvAX\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-hDinFWp5UbYPvAX.png\r\n------WebKitFormBoundaryCJfH1fmfNa9pq9tF--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
          url = await res.json()
          console.log(url)
    }catch(err){
        console.log(err)
    }
    res.json({
        status:"success",
        data:{
            url:url
        }
    })
}

module.exports = {generateImageController}