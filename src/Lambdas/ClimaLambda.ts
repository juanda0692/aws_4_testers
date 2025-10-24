import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { config } from "dotenv";
config();

const lambda = new LambdaClient({ region: process.env.AWS_REGION });

const invokeLambda = async () => {
    const functionName: string = "Clima";
    const payload: string = JSON.stringify({ key: "value" });
    const command = new InvokeCommand({
        FunctionName: functionName,
        Payload: Buffer.from(payload),
        InvocationType: "RequestResponse",
    });

    try {
        const response = await lambda.send(command);
        const responsePayload = JSON.parse(Buffer.from(response.Payload as Uint8Array).toString());
        if (responsePayload.errorMessage) {
            console.error("Error en la ejecución del Lambda: ", responsePayload.errorMessage);
        } else {
            console.log("Ejecución exitosa del Lambda: ", responsePayload);
        }
    } catch (e) {
        console.error("Error al invocar el Lambda: ", e);
    }
}

invokeLambda();