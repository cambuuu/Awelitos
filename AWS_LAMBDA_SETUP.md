# AWS Lambda Setup Guide for Contact Form

This guide explains how to set up an AWS Lambda function (Node.js) to handle contact form submissions from your Next.js application.

## 1. Create the Lambda Function

1.  Log in to the **AWS Management Console**.
2.  Navigate to **Lambda**.
3.  Click **Create function**.
4.  Select **Author from scratch**.
5.  **Function name**: `sendContactEmail` (or any name you prefer).
6.  **Runtime**: `Node.js 20.x` (or latest stable version).
7.  Click **Create function**.

## 2. Add Function Code

In the **Code source** section, replace the contents of `index.mjs` (or `index.js`) with the following code. This example logs the event; in a real scenario, you would use AWS SES (Simple Email Service) to send an email.

```javascript
export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  // The payload from Next.js comes in as the event directly if using InvokeCommand with JSON payload
  const { name, email, message } = event;

  if (!name || !email || !message) {
      return {
          statusCode: 400,
          body: JSON.stringify({ message: "Missing required fields" }),
      };
  }

  // TODO: Integrate with AWS SES to send an email here
  // const ses = new AWS.SES();
  // await ses.sendEmail(...).promise();

  console.log(`Processing message from ${name} (${email}): ${message}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify('Message processed successfully by Lambda!'),
  };
  return response;
};
```

8.  Click **Deploy** to save your changes.

## 3. Configure IAM Permissions (If sending emails)

If you plan to send emails using AWS SES:
1.  Go to the **Configuration** tab -> **Permissions**.
2.  Click on the **Execution role** name.
3.  In the IAM console, click **Add permissions** -> **Attach policies**.
4.  Search for `AmazonSESFullAccess` (or create a custom policy with `ses:SendEmail`) and attach it.

## 4. Connect Next.js to AWS

1.  In your Next.js project, install the AWS SDK:
    ```bash
    npm install @aws-sdk/client-lambda
    ```

2.  Create or update your `.env.local` file in the root of your project with your AWS credentials:
    ```env
    AWS_ACCESS_KEY_ID=your_access_key_id
    AWS_SECRET_ACCESS_KEY=your_secret_access_key
    AWS_REGION=us-east-1
    ```
    *Note: It is best practice to create a specific IAM User with only `lambda:InvokeFunction` permissions for this application.*

3.  **Update `src/app/api/contact/route.ts`**:
    - Uncomment the imports and the AWS SDK code block.
    - Ensure the `FunctionName` matches what you created in step 1.

## 5. Testing

1.  Run your Next.js app (`npm run dev`).
2.  Open the contact form and submit a message.
3.  Check the **Monitor** tab in the AWS Lambda console to see the CloudWatch logs and verify the function was invoked.
