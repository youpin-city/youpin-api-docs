define({ "api": [  {    "type": "post",    "url": "/photos/bulk_upload_from_urls",    "title": "Bulk upload from multiple URLs",    "description": "<p>Download multple photos from provided URLs and upload them for you.</p>",    "version": "0.1.0",    "name": "PostPhotosBulkUploadFromUrls",    "group": "Photos",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String[]",            "optional": false,            "field": "urls",            "description": "<p>Array of photo URLs to be uploaded</p>"          }        ]      }    },    "success": {      "fields": {        "Created 201": [          {            "group": "Created 201",            "type": "Object[]",            "optional": false,            "field": "photos",            "description": "<p>Array of photo metadata</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "photos.id",            "description": "<p>Photo ID.</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "photos.url",            "description": "<p>Photo URL.</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "photos.mimetype",            "description": "<p>MIME type.</p>"          },          {            "group": "Created 201",            "type": "Number",            "optional": false,            "field": "photos.size",            "description": "<p>File size (bytes).</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 Created\n{\n  \"urls\": [\n    {\n      \"id\": \"578fafba3855de9d00dc3c61\",\n      \"url\": \"https://storage.googleapis.com/you-pin.appspot.com/1469034415861_hello.png\",\n      \"mimetype\": \"image/png\",\n      \"size\": 138890\n    },\n    {\n      \"id\": \"578fafb39fi5de9d04817u87\",\n      \"url\": \"https://storage.googleapis.com/you-pin.appspot.com/9069039183882_world.png\",\n      \"mimetype\": \"image/png\",\n      \"size\": 151281\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "src/services/photo/index.js",    "groupTitle": "Photos"  },  {    "type": "post",    "url": "/photos/upload_from_url",    "title": "Upload from URL",    "description": "<p>Download a photo from a provided URL and upload it for you.</p>",    "version": "0.1.0",    "name": "PostPhotosUploadFromUrl",    "group": "Photos",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>Photo URL to be uploaded</p>"          }        ]      }    },    "success": {      "fields": {        "Created 201": [          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Photo ID.</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>Photo URL.</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "mimetype",            "description": "<p>MIME type.</p>"          },          {            "group": "Created 201",            "type": "Number",            "optional": false,            "field": "size",            "description": "<p>File size (bytes).</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 Created\n{\n  \"id\": \"578fafba3855de9d00dc3c61\",\n  \"url\": \"https://storage.googleapis.com/you-pin.appspot.com/1469034415861_hello.png\",\n  \"mimetype\": \"image/png\",\n  \"size\": 138890\n}",          "type": "json"        }      ]    },    "filename": "src/services/photo/index.js",    "groupTitle": "Photos"  },  {    "type": "get",    "url": "/pins/:id",    "title": "Request pin information",    "version": "0.1.0",    "name": "GetPin",    "group": "Pin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Pin unique ID.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "owner",            "description": "<p>Pin's owner ID.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "detail",            "description": "<p>Pin's detail.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "provider",            "description": "<p>Pin's provider ID.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "location",            "description": "<p>Location information</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "location.type",            "description": "<p>Type of location.</p>"          },          {            "group": "Success 200",            "type": "Number[]",            "optional": false,            "field": "location.coordinates",            "description": "<p>Latitude and longitude of location</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "photos",            "description": "<p>List of photos in this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "videos",            "description": "<p>List of videos in this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "comments",            "description": "<p>List of comments for this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "voters",            "description": "<p>List of user IDs who vote this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "mentions",            "description": "<p>List of mentions of this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "followers",            "description": "<p>List of user IDs who follow this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "neighborhood",            "description": "<p>List of neighborhood of this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "categories",            "description": "<p>List of categories of this pin.</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "tags",            "description": "<p>List of tags of this pin.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "created_time",            "description": "<p>Created time in ISO 8601 format.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updated_time",            "description": "<p>Updated time in ISO 8601 format.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"owner\": \"578aede2aac63013598e8501\",\n  \"detail\": \"ถังขยะล้นมาหลายวันแล้ว\",\n  \"provider\": ,\n  \"location\": {\n    \"type\": \"Point\",\n    \"coordinates\": [13.756727,100.5018549],\n  },\n  \"photos\": [],\n  \"videos\": [],\n  \"comments\": [],\n  \"voters\": [],\n  \"mentions\": [],\n  \"followers\": [],\n  \"neighborhood\": [],\n  \"categories\": [],\n  \"tags\": [],\n  \"created_time\": \"2016-07-17T02:41:56.597Z\",\n  \"updated_time\": \"2016-07-17T02:41:56.597Z\"\n}",          "type": "json"        }      ]    },    "filename": "src/services/pin/index.js",    "groupTitle": "Pin"  }] });
