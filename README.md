# Shopify App Integration

this is assignment from xipper, to develop and integrate Shopify-Api with node.js and reactjs. I have utilized [store custome app](https://help.shopify.com/en/manual/apps/app-types/custom-apps) with [Shopify-API package](https://www.npmjs.com/package/@shopify/shopify-api) and for webhook set up store [settings>notifications>webhoooks](https://help.shopify.com/en/manual/orders/notifications/webhooks).

## Requirements

### 1. Create a Shopify Partner Account:
- Sign up for a [Shopify Partner account](https://www.shopify.com/partners).
- Set up your partner dashboard.

### 2. Create a Dummy Shopify Store:
- In your Shopify Partner dashboard, create a new development store. This will serve as your dummy store for testing purposes.

### 3. Ngrok Server Setup:
- Ngrok is required for handling webhooks. For local development we use http protocol, were notification webhooks requires https. For this reason we are using [ngrok](https://ngrok.com/docs) for development purpose only.

## Environment Variables

Set up the following environment variables in your `.env` file:

    PORT=4000
    MONGODB_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    SHOPIFY_ADMIN_ACCESS_TOKEN=your_admin_access_token
    SHOPIFY_API_KEY=your_api_key
    SHOPIFY_API_SECRET_KEY=your_api_secret_key
    SHOPIFY_STORE_URL=your_store_url

## Installation

Run the following command to install the necessary dependencies:

```bash
npm install
```
## Running the Development Server

Use the following command to start the development server:

```bash
npm run dev
```
## Running Ngrok channel

Use the following command to run the Ngrok server:

```bash
ngrok http --domain=your-domain.com 4000 --host-header="localhost:4000"
```

I have used [ngrok domain](https://dashboard.ngrok.com/cloud-edge/domains) so i can access single domain anytime, basically static domain  

## For Front End 

for react frontend please refer this [repo](https://github.com/Saifkhan-rkp/assignment-xipper-frontend)


Thank You!