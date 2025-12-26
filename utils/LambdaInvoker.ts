import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { config } from "dotenv";
config();

export class LambdaInvoker {
    private lambdaClient: LambdaClient;

    constructor() {
        this.lambdaClient = new LambdaClient({ region: process.env.AWS_REGION });
    }

    async invokeLambda(functionName: string, payload: object): Promise<any> {
        const command = new InvokeCommand({
            FunctionName: functionName,
            Payload: Buffer.from(JSON.stringify(payload)),
            InvocationType: "RequestResponse",
        });

        try {
            const response = await this.lambdaClient.send(command);
            const responsePayload = JSON.parse(Buffer.from(response.Payload as Uint8Array).toString());
            return responsePayload;
        } catch (error) {
            console.error("Error al invocar el Lambda: ", error);
            throw error;
        }
    }
}
