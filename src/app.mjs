export const lambdaHandler = async (event) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

async function sum(number) {
    const numbers = JSON.parse(number.body);
    const result = numbers.num1 + numbers.num2;
    if (result % 2 == 0) {
        return result;
    } else {
        throw number.messageId;
    }
}