# gateway1-payment-webapp

Generate a fullstaclk payment webapp for this api curl and response sample api: curl -X POST 'http://54.169.246.202/gateway/gateway1' -H 'Content-Type:application/x-www-form-urlencoded' -d 'name=juan dela cruz&email=email@yahoo.com&message=message@yahoo.com&amount=5000&mobilenumber=9909232321&address=address&remarks=remarks'
Response: {
  "trans_id": "1844391",
  "external_id": "Z6CS863330382392",
  "operation_id": "platapay-operation-id-772443294181",
  "redirect_url": "https://test-sources.paymongo.com/sources?id=src_p9ry95a7pr19uMoL3aWL5UBq",
  "qr_content": "",
  "operation": {
    "status": "awaiting_redirect",
    "error_code": null,
    "error_message": "",
    "provider_error_message": ""
  },
  "request": {
    "status": "success",
    "error_code": 0,
    "error_message": ""
  },
  "timestamp": "2024-05-01 00:54:04",
  "signature": "85c65ee6d163b3ea809e6945e17dcdb435a23962ff41391c6fd7b25878a4e003"
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/gateway1-payment-webapp.git
cd gateway1-payment-webapp
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
