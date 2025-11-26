import { NextResponse } from 'next/server';

// --- AWS LAMBDA INTEGRATION INSTRUCTIONS ---
// 1. Install the AWS SDK: npm install @aws-sdk/client-lambda
// 2. Uncomment the imports and the code inside the POST function.
// 3. Ensure you have AWS credentials set up in your environment variables (.env.local):
//    AWS_ACCESS_KEY_ID=your_access_key
//    AWS_SECRET_ACCESS_KEY=your_secret_key
//    AWS_REGION=your_region (e.g., us-east-1)

// import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('Received contact form submission:', { name, email, message });

        // --- AWS LAMBDA INVOCATION CODE (COMMENTED OUT) ---
        /*
        const client = new LambdaClient({
          region: process.env.AWS_REGION,
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
          },
        });
    
        const command = new InvokeCommand({
          FunctionName: "sendContactEmail", // Replace with your actual Lambda function name
          Payload: JSON.stringify({ name, email, message }),
        });
    
        const response = await client.send(command);
        
        // Check if Lambda execution was successful
        if (response.StatusCode !== 200) {
           throw new Error('Lambda invocation failed');
        }
        */

        // Mock successful response for now
        return NextResponse.json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
